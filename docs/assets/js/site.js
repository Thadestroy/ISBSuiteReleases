(() => {
  function getSiteBase() {
    const meta = document.querySelector('meta[name="site-base"]');
    const raw = (meta && meta.getAttribute("content")) || "";
    return raw.replace(/\/$/, "");
  }

  function withBase(path) {
    if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("#") || path.startsWith("mailto:")) {
      return path;
    }
    const hashIdx = path.indexOf("#");
    const hash = hashIdx >= 0 ? path.slice(hashIdx) : "";
    const pathOnly = hashIdx >= 0 ? path.slice(0, hashIdx) : path;
    const base = getSiteBase();
    const normalized = pathOnly.startsWith("/") ? pathOnly : `/${pathOnly}`;
    return (base ? `${base}${normalized}` : normalized) + hash;
  }

  const SEARCH_INDEX = [
    {
      title: "Home",
      url: "/index.html",
      blurb: "Integrated Stream Broadcast Suite: easy to use, flexible to go advanced",
      keywords: "home landing showcase Integrated Stream Broadcast Suite download easy advanced",
    },
    {
      title: "Docs",
      url: "/wiki.html",
      blurb: "Full guides hub for every system",
      keywords: "docs hub wiki start documentation guides",
    },
    {
      title: "Privacy",
      url: "/privacy.html",
      blurb: "What the app stores locally and what leaves your PC",
      keywords: "privacy data local appdata tokens",
    },
    {
      title: "Download",
      url: "/download.html",
      blurb: "Windows installer, SmartScreen, Twitch, and OBS Window Capture",
      keywords: "download installer setup exe latest release ISBSuiteSetup install smartscreen obs capture window run anyway twitch",
    },
    {
      title: "Capture setup",
      url: "/download.html#capture",
      blurb: "Window Capture for ISB Suite - Capture in OBS or Streamlabs",
      keywords: "obs capture window streamlabs overlay stage",
    },
    {
      title: "Free and Pro",
      url: "/pricing.html",
      blurb: "Limits table and Pro license activation",
      keywords: "pricing free pro license payhip limits unlock TWS",
    },
    {
      title: "Features overview",
      url: "/features/index.html",
      blurb: "Full guides for every system",
      keywords: "features overview systems search guides",
    },
    {
      title: "Wheel",
      url: "/features/wheel.html",
      blurb: "Presets, chat join, spins, colors, per entry actions",
      keywords: "wheel spin !join !spinwheel !startwheelspin !endwheelspin !resetwheelspin preset quick launch entries cascading bulk import",
    },
    {
      title: "Actions",
      url: "/features/actions/index.html",
      blurb: "Shared action setup: sound, chat, wheel, alerts, timers",
      keywords: "actions play sound send message start wheel session giveaway run alert tts discord webhook counter timer randomized image picker",
    },
    {
      title: "Start Wheel Session action",
      url: "/features/actions/start-wheel-session.html",
      blurb: "Load a wheel preset and optionally auto-spin",
      keywords: "start wheel session load spin auto-spin preset",
    },
    {
      title: "Play Sound action",
      url: "/features/actions/play-sound.html",
      blurb: "Queue audio, volume, bypass sound queue",
      keywords: "play sound bypass queue volume stinger walk-on",
    },
    {
      title: "Send Message action",
      url: "/features/actions/send-message.html",
      blurb: "Chat templates with variables",
      keywords: "send message chat response template variables",
    },
    {
      title: "Text-to-Speech action",
      url: "/features/actions/text-to-speech.html",
      blurb: "Speak chat text or custom TTS lines",
      keywords: "text to speech tts voice polly speak",
    },
    {
      title: "Discord Webhook action",
      url: "/features/actions/discord-webhook.html",
      blurb: "Post to named Discord webhooks",
      keywords: "discord webhook webhook message announce",
    },
    {
      title: "Counter Action",
      url: "/features/actions/counter-action.html",
      blurb: "Change by or Set to; ranges, other counters, tiers",
      keywords: "counter action change by set to amount tier",
    },
    {
      title: "Push Community Goal action",
      url: "/features/actions/push-community-goal.html",
      blurb: "Add goal progress; optional amount from trigger",
      keywords: "push community goal progress bits amount",
    },
    {
      title: "Run Alert action",
      url: "/features/actions/run-alert.html",
      blurb: "Play an Alerts-page alert from any Actions surface",
      keywords: "run alert action only custom alert picker",
    },
    {
      title: "Timer action",
      url: "/features/actions/timer.html",
      blurb: "Delay other actions; optional Timer Widget (not Subathon)",
      keywords: "timer delay countdown !endtimer widget",
    },
    {
      title: "Live Timer action",
      url: "/features/actions/live-timer.html",
      blurb: "Drive a Live Clock (Subathon) on a Timer Widget",
      keywords: "live timer live clock subathon add subathon !pausetimer !addtime !endtimer starts at",
    },
    {
      title: "Start Giveaway Session action",
      url: "/features/actions/start-giveaway-session.html",
      blurb: "Timed chat-entry giveaway with advanced options",
      keywords: "start giveaway session join command duration winner",
    },
    {
      title: "Run Chat Bot or Automation action",
      url: "/features/actions/run-chat-bot-or-automation.html",
      blurb: "Chain into another Chat Bot or Automation rule",
      keywords: "run chat bot or automation chain call rule",
    },
    {
      title: "Randomized Action",
      url: "/features/actions/randomized-action.html",
      blurb: "Pick one of several action sets each fire",
      keywords: "randomized action sets no repeat until all uniform",
    },
    {
      title: "Randomize Image Picker action",
      url: "/features/actions/randomize-image-picker.html",
      blurb: "Re-roll overlay Random Image Picker widgets",
      keywords: "randomize image picker pool re-roll overlay",
    },
    {
      title: "Automations",
      url: "/features/automations.html",
      blurb: "Triggers, actions, cooldowns, chains, randomized sets",
      keywords: "automation trigger action channel points bits walk-on timer discord webhook run alert randomized chain bypass sound queue",
    },
    {
      title: "Alerts",
      url: "/features/alerts.html",
      blurb: "Built-in and custom alerts, appearance, Run Alert",
      keywords: "alert follow sub bits raid tts gif appearance custom run alert motion style preset",
    },
    {
      title: "Chat Bot",
      url: "/features/chat-bot.html",
      blurb: "Commands, timed messages, same engine as Automations",
      keywords: "chat bot command alias cooldown match anywhere timed scheduled built in groups",
    },
    {
      title: "Chat Games",
      url: "/features/chat-games/index.html",
      blurb: "Heist, lottery, duel, dice bands, stakes",
      keywords: "chat games heist lottery duel dice percentile roll stake no winners {roll} {outcome}",
    },
    {
      title: "Heist chat game",
      url: "/features/chat-games/heist.html",
      blurb: "Timed window, variable bets, independent win rolls",
      keywords: "heist chat game stake win chance payout no winners",
    },
    {
      title: "Lottery chat game",
      url: "/features/chat-games/lottery.html",
      blurb: "Fixed entry fee, one winner takes the pool",
      keywords: "lottery chat game pool fixed stake single winner",
    },
    {
      title: "Duel chat game",
      url: "/features/chat-games/duel.html",
      blurb: "Instant per-user gamble with Win and Lose phases",
      keywords: "duel chat game instant stake win lose",
    },
    {
      title: "Percentile roll chat game",
      url: "/features/chat-games/percentile-roll.html",
      blurb: "Dice range bands and outcome profiles",
      keywords: "percentile roll dice bands {roll} {outcome} profile",
    },
    {
      title: "Blank sandbox chat game",
      url: "/features/chat-games/blank-sandbox.html",
      blurb: "Timed free-join session you configure yourself",
      keywords: "blank sandbox chat game free join timed session",
    },
    {
      title: "Instant action chat game",
      url: "/features/chat-games/instant-action.html",
      blurb: "No session; trigger runs Actions immediately",
      keywords: "instant action chat game loot command no session",
    },
    {
      title: "Overlay Layout",
      url: "/features/overlay-layout/index.html",
      blurb: "Layouts, widgets, hotkeys, Timer Widget",
      keywords: "overlay layout widget alert box point drop browser source timer !endtimer hotkey transition",
    },
    {
      title: "Wheel overlay widget",
      url: "/features/overlay-layout/wheel.html",
      blurb: "Where the spinning wheel renders on capture",
      keywords: "overlay wheel widget placement capture",
    },
    {
      title: "Alert Box overlay widget",
      url: "/features/overlay-layout/alert-box.html",
      blurb: "Region where stream alerts play",
      keywords: "overlay alert box widget run alert",
    },
    {
      title: "Point Drop overlay widget",
      url: "/features/overlay-layout/point-drop.html",
      blurb: "Where Viewer Points drop images appear",
      keywords: "overlay point drop widget claim spawn",
    },
    {
      title: "Static Image overlay widget",
      url: "/features/overlay-layout/static-image.html",
      blurb: "Logos and fixed art on the stage",
      keywords: "overlay static image logo branding",
    },
    {
      title: "Browser Source overlay widget",
      url: "/features/overlay-layout/browser-source.html",
      blurb: "Live web page URL inside capture",
      keywords: "overlay browser source url cef page",
    },
    {
      title: "Random Image Picker overlay widget",
      url: "/features/overlay-layout/random-image-picker.html",
      blurb: "Bound picker images; re-roll via Actions",
      keywords: "overlay random image picker widget pool",
    },
    {
      title: "Timer Widget",
      url: "/features/overlay-layout/timer.html",
      blurb: "Delay Timer or Live Clock (Subathon) countdown",
      keywords: "overlay timer widget countdown live clock subathon !endtimer !pausetimer !addtime preset",
    },
    {
      title: "Viewer Points",
      url: "/features/viewer-points.html",
      blurb: "Currency, Watching earn, shop, point drops",
      keywords: "viewer points shop drop earn watching watch time balance !points !givepoints !gamble !claim",
    },
    {
      title: "Community Goals",
      url: "/features/community-goals.html",
      blurb: "Milestones, check commands, Chat Message accumulation",
      keywords: "community goal !bitsgoal progress check command blerp used bits push goal",
    },
    {
      title: "Counters and Stats",
      url: "/features/counters-stats.html",
      blurb: "Counters, tiers, CSV, leaderboards",
      keywords: "counter stats tier leaderboard csv {top5Counter} {counterTier} {count} watch time",
    },
    {
      title: "Integrations",
      url: "/features/integrations.html",
      blurb: "Twitch, bot account, Discord webhooks, Tiltify, TTS",
      keywords: "integrations twitch discord tiltify bot account eventsub oauth webhook migration",
    },
    {
      title: "Queues and Giveaways",
      url: "/features/queues-giveaways.html",
      blurb: "Home queues and timed giveaways",
      keywords: "queue giveaway pause skip countdown winner !giveaway handoff",
    },
    {
      title: "Use cases",
      url: "/reference/use-cases.html",
      blurb: "Scenarios and Extra tips",
      keywords: "use case setup walk-on cascading stream deck hands-free multi-trigger chain discord heist",
    },
    {
      title: "Chat commands",
      url: "/reference/chat-commands.html",
      blurb: "Viewer and mod commands, Advanced Settings",
      keywords: "commands !join !spinwheel !points !giveaway !vpgive permission alias match anywhere cooldown limits",
    },
    {
      title: "Message variables",
      url: "/reference/message-variables.html",
      blurb: "Tokens for chat, alerts, TTS, leaderboards",
      keywords: "variables tokens {user} {winner} {amount} {counter} {balance} {goalProgress} {top5Counter} {counterTier} {input}",
    },
    {
      title: "FAQ and troubleshooting",
      url: "/reference/faq.html",
      blurb: "Twitch, audio, overlay, alerts, cursor, Tiltify",
      keywords: "faq troubleshooting connected audio overlay cursor minecraft wgc fullscreen tiltify",
    },
  ];

  const SIDE_NAV = [
    {
      heading: "Start",
      links: [
        { href: "/index.html", label: "Home" },
        { href: "/wiki.html", label: "Docs" },
        { href: "/download.html", label: "Download" },
        { href: "/pricing.html", label: "Free and Pro" },
        { href: "/privacy.html", label: "Privacy" },
      ],
    },
    {
      heading: "Features",
      links: [
        { href: "/features/index.html", label: "Overview" },
        { href: "/features/wheel.html", label: "Wheel" },
        {
          id: "actions",
          href: "/features/actions/index.html",
          label: "Actions",
          matchPrefix: "/features/actions",
          children: [
            { href: "/features/actions/index.html", label: "Overview" },
            { href: "/features/actions/start-wheel-session.html", label: "Start Wheel Session" },
            { href: "/features/actions/play-sound.html", label: "Play Sound" },
            { href: "/features/actions/send-message.html", label: "Send Message" },
            { href: "/features/actions/text-to-speech.html", label: "Text-to-Speech" },
            { href: "/features/actions/discord-webhook.html", label: "Discord Webhook" },
            { href: "/features/actions/counter-action.html", label: "Counter Action" },
            { href: "/features/actions/push-community-goal.html", label: "Push Community Goal" },
            { href: "/features/actions/run-alert.html", label: "Run Alert" },
            { href: "/features/actions/timer.html", label: "Timer" },
            { href: "/features/actions/live-timer.html", label: "Live Timer" },
            { href: "/features/actions/start-giveaway-session.html", label: "Start Giveaway Session" },
            { href: "/features/actions/run-chat-bot-or-automation.html", label: "Run Chat Bot or Automation" },
            { href: "/features/actions/randomized-action.html", label: "Randomized Action" },
            { href: "/features/actions/randomize-image-picker.html", label: "Randomize Image Picker" },
          ],
        },
        { href: "/features/automations.html", label: "Automations" },
        { href: "/features/alerts.html", label: "Alerts" },
        { href: "/features/chat-bot.html", label: "Chat Bot" },
        {
          id: "chat-games",
          href: "/features/chat-games/index.html",
          label: "Chat Games",
          matchPrefix: "/features/chat-games",
          children: [
            { href: "/features/chat-games/index.html", label: "Overview" },
            { href: "/features/chat-games/heist.html", label: "Heist" },
            { href: "/features/chat-games/lottery.html", label: "Lottery" },
            { href: "/features/chat-games/duel.html", label: "Duel" },
            { href: "/features/chat-games/percentile-roll.html", label: "Percentile roll" },
            { href: "/features/chat-games/blank-sandbox.html", label: "Blank sandbox" },
            { href: "/features/chat-games/instant-action.html", label: "Instant action" },
          ],
        },
        {
          id: "overlay-layout",
          href: "/features/overlay-layout/index.html",
          label: "Overlay Layout",
          matchPrefix: "/features/overlay-layout",
          children: [
            { href: "/features/overlay-layout/index.html", label: "Overview" },
            { href: "/features/overlay-layout/wheel.html", label: "Wheel" },
            { href: "/features/overlay-layout/alert-box.html", label: "Alert Box" },
            { href: "/features/overlay-layout/point-drop.html", label: "Point Drop" },
            { href: "/features/overlay-layout/static-image.html", label: "Static Image" },
            { href: "/features/overlay-layout/browser-source.html", label: "Browser Source" },
            { href: "/features/overlay-layout/random-image-picker.html", label: "Random Image Picker" },
            { href: "/features/overlay-layout/timer.html", label: "Timer Widget" },
          ],
        },
        { href: "/features/viewer-points.html", label: "Viewer Points" },
        { href: "/features/community-goals.html", label: "Community Goals" },
        { href: "/features/counters-stats.html", label: "Counters and Stats" },
        { href: "/features/integrations.html", label: "Integrations" },
        { href: "/features/queues-giveaways.html", label: "Queues and Giveaways" },
      ],
    },
    {
      heading: "Reference",
      links: [
        { href: "/reference/use-cases.html", label: "Use cases" },
        { href: "/reference/chat-commands.html", label: "Chat commands" },
        { href: "/reference/message-variables.html", label: "Message variables" },
        { href: "/reference/faq.html", label: "FAQ" },
      ],
    },
  ];

  function normalizePath(pathname) {
    let p = pathname || "/";
    const base = getSiteBase();
    if (base && p.startsWith(base)) {
      p = p.slice(base.length) || "/";
    }
    // Strip hash/query if present
    p = p.split("#")[0].split("?")[0];
    if (p.endsWith("/")) p += "index.html";
    return p;
  }

  function currentPath() {
    return normalizePath(window.location.pathname);
  }

  function pathMatchesBranch(path, link) {
    const prefix = link.matchPrefix;
    if (!prefix) {
      const base = normalizePath((link.href || "").split("#")[0]);
      return path === base;
    }
    if (prefix.endsWith(".html")) return path === prefix;
    return path === prefix || path === `${prefix}/index.html` || path.startsWith(`${prefix}/`);
  }

  function branchStorageKey(id) {
    return `wiki-nav-${id}-open`;
  }

  function readBranchOpen(id, underSection) {
    try {
      const stored = sessionStorage.getItem(branchStorageKey(id));
      if (stored === "1") return true;
      if (stored === "0") return false;
    } catch {
      /* private mode */
    }
    return underSection;
  }

  function writeBranchOpen(id, open) {
    try {
      sessionStorage.setItem(branchStorageKey(id), open ? "1" : "0");
    } catch {
      /* private mode */
    }
  }

  function childIsCurrent(childHref, here) {
    const [pathPart, hashPart] = childHref.split("#");
    if (normalizePath(pathPart) !== here) return false;
    if (hashPart) return window.location.hash === `#${hashPart}`;
    // Plain page link (Overview): current when on that path with no hash.
    return !window.location.hash;
  }

  function renderSidebarLink(link, here) {
    const children = Array.isArray(link.children) ? link.children : null;
    if (!children) {
      const current = normalizePath(link.href) === here ? ' aria-current="page"' : "";
      return `<a href="${withBase(link.href)}"${current}>${link.label}</a>`;
    }

    const branchId = link.id || "branch";
    const underSection = pathMatchesBranch(here, link);
    const sectionOpen = readBranchOpen(branchId, underSection);
    const sectionClass = underSection || sectionOpen ? " is-section" : "";
    const branchClass = sectionOpen ? "side-branch" : "side-branch is-collapsed";
    const expanded = sectionOpen ? "true" : "false";
    const toggleLabel = sectionOpen ? `Collapse ${link.label} pages` : `Expand ${link.label} pages`;
    const subId = `side-nav-${branchId}`;

    const sub = children
      .map((child) => {
        const childCurrent = childIsCurrent(child.href, here) ? ' aria-current="page"' : "";
        return `<a href="${withBase(child.href)}"${childCurrent}>${child.label}</a>`;
      })
      .join("");

    // Whole parent row toggles; hub/Overview is a child link.
    return `<div class="${branchClass}" data-nav-branch="${branchId}">
      <button type="button" class="side-parent${sectionClass}" aria-expanded="${expanded}" aria-controls="${subId}" aria-label="${toggleLabel}">
        <span class="side-branch-label">${link.label}</span>
        <span class="side-toggle" aria-hidden="true"></span>
      </button>
      <div class="side-sub" id="${subId}" role="group" aria-label="${link.label} pages"${sectionOpen ? "" : " hidden"}>${sub}</div>
    </div>`;
  }

  const SIDE_SCROLL_KEY = "wiki-side-scroll";

  function saveSideScroll() {
    const side = document.getElementById("wiki-side");
    if (!side) return;
    try {
      sessionStorage.setItem(SIDE_SCROLL_KEY, String(side.scrollTop));
    } catch {
      /* private mode */
    }
  }

  function restoreSideScroll() {
    const side = document.getElementById("wiki-side");
    if (!side) return;
    try {
      const saved = sessionStorage.getItem(SIDE_SCROLL_KEY);
      if (saved != null) side.scrollTop = Number(saved) || 0;
    } catch {
      /* private mode */
    }
    // Only nudge if the current page link is outside the visible nav area.
    const current = side.querySelector("[aria-current='page']");
    if (current) current.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  function setupSidebarBranches() {
    const side = document.getElementById("wiki-side");
    if (!side) return;
    side.querySelectorAll("[data-nav-branch]").forEach((branch) => {
      const parent = branch.querySelector(".side-parent");
      const sub = branch.querySelector(".side-sub");
      const branchId = branch.getAttribute("data-nav-branch");
      if (!parent || !sub || !branchId) return;
      parent.addEventListener("click", () => {
        const open = branch.classList.toggle("is-collapsed") === false;
        sub.hidden = !open;
        parent.setAttribute("aria-expanded", open ? "true" : "false");
        const label = branch.querySelector(".side-branch-label")?.textContent?.trim() || "section";
        parent.setAttribute("aria-label", open ? `Collapse ${label} pages` : `Expand ${label} pages`);
        writeBranchOpen(branchId, open);
        saveSideScroll();
      });
    });
  }

  function setupSideScrollPersist() {
    const side = document.getElementById("wiki-side");
    if (!side) return;
    side.addEventListener("scroll", saveSideScroll, { passive: true });
    // Capture click before navigation so the next page can restore position.
    side.addEventListener("click", (e) => {
      if (e.target.closest("a[href]")) saveSideScroll();
    });
  }

  function renderSidebar() {
    const side = document.getElementById("wiki-side");
    if (!side) return;
    const here = currentPath();
    side.innerHTML = SIDE_NAV.map((group) => {
      const links = group.links.map((link) => renderSidebarLink(link, here)).join("");
      return `<nav class="side-group" aria-label="${group.heading}"><h2>${group.heading}</h2>${links}</nav>`;
    }).join("");
    setupSidebarBranches();
    setupSideScrollPersist();
    restoreSideScroll();
  }

  function scoreItem(item, q) {
    const hay = `${item.title} ${item.blurb} ${item.keywords}`.toLowerCase();
    if (!hay.includes(q)) return 0;
    let score = 1;
    if (item.title.toLowerCase().includes(q)) score += 5;
    if (item.keywords.toLowerCase().includes(q)) score += 2;
    return score;
  }

  function setupSearch() {
    const input = document.getElementById("wiki-search");
    const panel = document.getElementById("search-results");
    if (!input || !panel) return;

    let active = -1;
    let matches = [];

    function render() {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        panel.classList.remove("is-open");
        panel.innerHTML = "";
        matches = [];
        active = -1;
        return;
      }
      matches = SEARCH_INDEX.map((item) => ({ item, score: scoreItem(item, q) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
        .slice(0, 12)
        .map((x) => x.item);

      if (!matches.length) {
        panel.innerHTML = `<div class="sr-empty">No matches for "${input.value.trim()}".</div>`;
        panel.classList.add("is-open");
        active = -1;
        return;
      }

      panel.innerHTML = matches
        .map(
          (m, i) =>
            `<a href="${withBase(m.url)}" class="${i === active ? "is-active" : ""}" data-i="${i}"><div class="sr-title">${m.title}</div><div class="sr-blurb">${m.blurb}</div></a>`
        )
        .join("");
      panel.classList.add("is-open");
    }

    input.addEventListener("input", () => {
      active = -1;
      render();
    });

    input.addEventListener("keydown", (e) => {
      if (!panel.classList.contains("is-open")) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        active = Math.min(active + 1, matches.length - 1);
        render();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        active = Math.max(active - 1, 0);
        render();
      } else if (e.key === "Enter" && active >= 0 && matches[active]) {
        e.preventDefault();
        window.location.href = withBase(matches[active].url);
      } else if (e.key === "Escape") {
        panel.classList.remove("is-open");
      }
    });

    document.addEventListener("click", (e) => {
      if (!panel.contains(e.target) && e.target !== input) {
        panel.classList.remove("is-open");
      }
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  function setupNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function rewriteStaticRootLinks() {
    const base = getSiteBase();
    if (!base) return;
    document.querySelectorAll("a[href^='/'], img[src^='/'], link[href^='/'], script[src^='/']").forEach((el) => {
      const attr = el.hasAttribute("href") ? "href" : "src";
      const val = el.getAttribute(attr);
      if (!val || val.startsWith("//") || val.startsWith(base + "/") || val === base) return;
      if (val.startsWith("/")) el.setAttribute(attr, base + val);
    });
  }

  rewriteStaticRootLinks();
  renderSidebar();
  setupSearch();
  setupNavToggle();
})();
