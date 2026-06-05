
    // ── COUNTDOWN CONFIG ──────────────────────────────────────────
    // REPLACE: event date & time in ISO format (YYYY-MM-DDTHH:MM:SS)
    const EVENT_DATE_STR = '2026-08-12T20:00:00';
    // REPLACE: IANA timezone string for the event location
    const EVENT_TIMEZONE = 'America/Guatemala';
    // ─────────────────────────────────────────────────────────────

    const pad = n => String(n).padStart(2, '0');

    const elDisplay = document.getElementById('cd-display');
    const container = document.getElementById('hero-countdown');

    function getEventTimestamp() {
      // Parse the date string in the event's local timezone
      const [datePart, timePart] = EVENT_DATE_STR.split('T');
      const [year, month, day]   = datePart.split('-').map(Number);
      const [hour, min, sec]     = timePart.split(':').map(Number);

      // Use Intl to find the UTC offset for that timezone at that moment
      const ref = new Date(Date.UTC(year, month - 1, day, hour, min, sec));
      const localStr = ref.toLocaleString('en-US', { timeZone: EVENT_TIMEZONE, hour12: false,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit' });

      // Parse the localized string back to get offset
      const parts = localStr.match(/(\d+)\/(\d+)\/(\d+),\s(\d+):(\d+):(\d+)/);
      const localUTC = Date.UTC(+parts[3], +parts[1]-1, +parts[2], +parts[4]%24, +parts[5], +parts[6]);
      const offset   = localUTC - ref.getTime();

      return ref.getTime() - offset;
    }

    const EVENT_TS = getEventTimestamp();

    function tick() {
      const diff = EVENT_TS - Date.now();

      if (diff <= 0) {
        elDisplay.textContent = '';
        container.innerHTML = '<p class="countdown-expired">Tonight\'s the night!</p>';
        return;
      }

      const days  = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins  = Math.floor((diff % 3600000)  / 60000);

      elDisplay.textContent = `${pad(days)}:${pad(hours)}:${pad(mins)}`;
    }

    tick();
    setInterval(tick, 30000); // update every 30s (minutes-precision display)