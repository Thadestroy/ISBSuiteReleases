# ISB Suite

A full-featured stream overlay suite for Twitch streamers. Spin wheels, run giveaways, fire alerts, manage viewer points, run chat games and community goals, and automate your entire stream from a single app.

![Windows](https://img.shields.io/badge/Windows-10%2B-blue?logo=windows)
[![Latest Release](https://img.shields.io/github/v/release/Thadestroy/ISBSuiteReleases?label=Download)](https://github.com/Thadestroy/ISBSuiteReleases/releases/latest)

> **ISB Suite is an ongoing project.** Feedback, bug reports, and feature ideas are fully welcomed. [Open an issue](https://github.com/Thadestroy/ISBSuiteReleases/issues) to share anything you'd like to see.

---

## Download & Install

**[Download Latest Version](https://github.com/Thadestroy/ISBSuiteReleases/releases/latest)**

### Installation Steps
1. Download the installer (`ISBSuiteSetup_X.X.X.exe`)
2. Run the installer. **Windows may show a security warning:**
   - Click **"More info"**
   - Then click **"Run anyway"**
   - *(This appears because the app isn't signed with an expensive certificate yet)*
3. Follow the setup wizard

### Requirements
- Windows 10 or later
- Twitch account (optional, but you want to connect the integration)

---

## Free vs Pro

ISB Suite is **free to download and use** with generous limits on each feature. **Pro** is a one-time license that removes all limits.

| Feature | Free limit | Pro |
|---------|------------|-----|
| Wheel presets | 3 | Unlimited |
| Automations | 15 | Unlimited |
| Chat Bot commands | 25 | Unlimited |
| Alerts (per alert type) | 1 dedicated alert per type | Unlimited |
| Custom Alerts | 3 | Unlimited |
| Overlay layouts | 2 | Unlimited |
| Viewer Points currencies | 1 | Unlimited |
| Shop items (per currency) | 5 | Unlimited |
| Point drops (per currency) | 1 | Unlimited |
| Community goals | 3 | Unlimited |
| Counters | 5 | Unlimited |

**How locking works:** When you exceed a Free limit, your **oldest** items stay active and newer ones are **locked** (visible but inactive) until you upgrade to Pro or delete items to make room. Built-in system counters and counters referenced by other features (automations, wheels, viewer points, etc.) are exempt from the counter limit.

### Upgrade to Pro

- **[Purchase ISB Suite Pro](https://payhip.com/b/dXKjz)** (one-time purchase, license key)
- After purchase, copy your `TWS-...` license key from the Payhip download page or receipt email
- In ISB Suite, click **Upgrade to Pro** or **Enter License Key**, paste your key, and click **Activate**

Pro unlocks immediately. No subscription and no reinstall required.

---

## What's In ISB Suite

ISB Suite is built around several major systems that all work together:

| System | What it does |
|--------|-------------|
| **Wheel** | Spin prizes, pick winners, run giveaways |
| **Automations** | Connect any Twitch event to any action |
| **Chat Bot** | Automated chat messages triggered by stream events or commands |
| **Alerts** | On-screen overlays for follows, subs, raids, donations, and more |
| **Overlay Layout** | Drag-and-drop layout editor for your capture window |
| **Viewer Points** | Custom channel currency with a shop and point drops |
| **Community Goals** | Stream-wide progress bars fed by Twitch events or chat |
| **Chat Games** | Mass-entry chat games with stakes, rolls, and configurable outcomes |
| **Counters & Stats** | Global and per-viewer counters with tiers and CSV export |
| **Character Studio** | *(coming soon)* |

---

## Features Overview

### Wheel
- Colorful animated wheel with smooth spin animations
- Custom color palettes (per-wheel or per-entry)
- Displays viewer Twitch name colors on wheel slices when viewers `!join`
- Transparent background for window capture
- Configurable winner announcement messages with variable substitution
- Remove-on-win mode, allow-duplicates mode
- Quick Launch presets: one click loads and optionally auto-spins any saved wheel

### Twitch Chat Integration
- Viewers join the wheel via `!join`
- Mods and broadcaster control spins entirely from chat
- Full built-in crash recovery and reconnect handling
- EventSub connection for channel point redemptions and all Twitch events

### Alerts System
Animated on-screen alerts for stream events, displayed in the Alert Box widget on your overlay:

**Twitch Alerts**
- Follow, New Subscription, Resubscription, Gift Subscriptions
- Bits / Cheer, Raid, Hype Train End, Goal Achieved
- Ad Break, Shoutout Received, Channel Point Redemption

Each alert type is fully configurable:
- Custom alert image or GIF
- Custom alert text with variable substitution (`{user}`, `{amount}`, etc.)
- Configurable display duration and entrance/exit effects (Fade or Instant)
- TTS announcement attached to any alert
- Per-alert minimum thresholds (e.g. only alert on raids with 10+ viewers)

**Custom Alerts**
Create alerts for trigger types that aren't covered by the built-in per-type sections, from the **Custom Alerts** section on the Alerts page:

| Trigger | Details |
|---------|---------|
| Community Goal Reached | When a community goal hits its limit |
| Counter Tier Reached | When a counter crosses into the next configured tier |
| First Chat Message | Walk-on / catch-all on a viewer's first message |
| Chat Command | Your own `!command` |
| Timer | Interval / countdown-driven alert |

Custom alerts support the same overlay options as built-in alerts (image/GIF, sound, alert text, TTS, and chat response). When multiple alert rules match the same event, the most specific alert fires (exact-amount and dedicated rules beat catch-alls). Free includes **3** custom alerts; Pro is unlimited.

### Overlay Layout Editor
Design exactly what gets captured by your streaming software using the built-in layout editor:

- Multiple named layouts (switch between them live or with hotkeys)
- Drag-and-drop widgets onto a 1920×1080 (or custom) stage canvas
- Resize widgets with handles, set precise positions
- Global hotkeys to switch layouts or toggle individual widget visibility
- Preview all widgets live from inside the editor

> **Important:** To see your Overlay Layout on stream, you must add a **Window Capture** of the ISB Suite window in your streaming software (OBS, Streamlabs, etc.). See [Capture Setup](#capture-setup-window-capture) below.

**Widget Types**

| Widget | Description |
|--------|-------------|
| **Wheel** | Marks where the spinning wheel renders in the capture |
| **Alert Box** | Region where stream event alerts appear |
| **Point Drop** | Shows point drop images/GIFs when a drop is active |
| **Static Image** | Any image or logo placed on your stage |
| **Browser Source** | Renders a live web page (URL) inside the capture, like an OBS/Streamlabs browser source |
| **Random Image Picker** | Displays one randomly chosen image from a Random Image Picker; re-rolled by the "Randomize Image Picker" automation action |
| **Timer Widget** | Live countdown for linked Timer actions (see [Timer Widget](#timer-widget)) |
| **Character Playfield** | *(coming soon)* |

### Character Studio
*(coming soon)*

### Viewer Points
Create a custom channel currency with a redeemable shop and point drops:

**Currency Settings**
- Internal name, display name, and balance chat command (e.g. `!points`)
- Customizable balance response, not-enough-points message, and redemption confirmation message

**Earn Rules**
- Automatically award points on a schedule while viewers are present in chat during a live stream
- **Watching (live presence):** set an interval (e.g. every 5 minutes) and how many points to award
- Requires **Stats → Watch Time** to be enabled (uses the same live chat presence poll)

**Viewer Commands**
- **Balance command:** viewers type `!points` (or your custom command) to check their balance
- **Give command:** viewers give their own points to another chatter (`!givepoints`)
- **Gamble command:** viewers wager their points on a configurable win-chance roll (`!gamble`)
- Each command supports **aliases** — alternate names that run the same command

**Admin Commands**
- Admin give command: broadcaster/mods award points to any viewer from chat
- Supports aliases like the other viewer-points commands

**Shop Items (Redeemables)**
- Viewers spend points to trigger actions: load a wheel, play a sound, start a giveaway, send a chat message, increment a counter, or trigger any saved automation
- Per-item price, permission level, and optional cooldown
- Customizable purchase confirmation message
- **Command aliases** — alternate names redeem the same shop item; longer aliases pass the remainder as `{input}`

**Point Drops**
- Timed events where a configurable image or GIF appears on the overlay
- Chatters type a command to claim a randomized share of a point pool
- Claim command supports **aliases**
- Configurable spawn interval, spawn chance, display duration, max claimants, and point pool range
- Supports "only when live" mode to skip during starting-soon screens

### Powerful Automation System
Connect any stream event to any action. Automations live in the **Automations** tab.

**Trigger Types**

| Trigger | Details |
|---------|---------|
| Channel Point Redemption | Matches by reward title; auto-detects reward ID after first redemption |
| Walk-on Sound | Fires on a specific viewer's first chat message per stream; supports "only when live" |
| Bits / Cheer | At-least or exact bit amount |
| Gift Subscriptions | At-least or exact gift count |
| New Subscription | Any tier, or filtered by Tier 1/2/3 |
| Resubscription | Any, or filtered by tier and/or minimum months |
| Follow | Any new follow |
| Raid | Any raid, or with minimum viewer count |
| Hype Train End | Any level, or minimum level |
| Goal Achieved | Any goal type, or filtered by type string |
| Ad Break | Any duration, or a specific ad length |
| Shoutout Received | Any shoutout from another broadcaster |
| Custom Chat Command | Your own `!command` with permission level, optional cooldown, and **aliases** |
| Counter Tier Reached | When a viewer (per-user counter) or the channel (global counter) crosses upward into the next configured tier on a selected counter; fires once per tier gained if several thresholds are crossed in one increment |
| Community Goal Reached | When a community goal hits its limit (optional filter by goal) |
| Timer / Interval | Repeating interval (Automations tab) |

**Multi-trigger support:** one automation can respond to multiple different trigger types simultaneously.

**Actions per Automation**

| Action | Details |
|--------|---------|
| Load & Spin Wheel | Pick any saved preset; optionally auto-spin |
| Play Sound | Queue an audio file with 0 to 200% volume control |
| Send Chat Message | Custom text with variable substitution (Twitch chat) |
| Discord Webhook | Post to one or more named Discord webhooks (see [Discord Webhooks](#discord-webhooks-optional)) |
| Increment Counter | Update a global or per-user counter |
| Start Giveaway | Open a timed viewer-entry giveaway |
| Show Alert | Display an on-screen alert box event |
| Text-to-Speech | Speak an announcement (no credentials needed) |
| Timer | Countdown before actions fire; optionally show the countdown on a [Timer Widget](#timer-widget) |
| Randomized Action | Pick one of several action sets at random (different sounds, messages, wheels, etc.) |
| Run Automation | Trigger another saved automation (chains keep the original chatter's variables) |

**Command Cooldowns:** Global (shared channel timer) or Per-User (independent per chatter), with configurable response message.

**Command Aliases:** Chat command triggers accept alternate names that fire the same automation. Longer matching aliases win when several could match, and any leftover text after the alias becomes `{input}`.

**Bypass Sound Queue:** play a sound immediately (overlapping) instead of waiting in queue.

**Randomized Action:** Enable on any automation (or shop item / chat game) to define multiple action sets. Each trigger randomly runs one set — uniform random, or **no repeat until all** so every set plays once before any repeats. Useful for varied hype sounds, rotating chat responses, or unpredictable wheel loads from a single command.

**Timer:** Enable the Timer action to delay everything else on the rule until the countdown finishes. Link a Timer Widget preset to show the live countdown on your overlay while chat, alerts, and other deferred actions wait.

**Automation Chains:** When a Chat Bot command or Automation uses **Run Automation** to trigger another rule (which can itself trigger another), every hop keeps the **original chatter's data** — `{user}`, `{userId}`, badge flags, bits, subs, and the rest. Chains can run up to **20** hops; genuine loops (A → B → A) are stopped automatically with a warning in the log. When a wheel entry win triggers an automation, `{winner}` resolves to the winning entry's name.

### Chat Bot
Automated chat messages driven by the same rule engine as Automations, managed in the **Chat Bot** tab:
- Respond to custom `!commands` with permission levels, cooldowns, and **aliases**
- Post scheduled or event-driven messages with variable substitution
- Share the same trigger and action building blocks as Automations

### Counter System
Track numbers that persist across streams:
- **Global Counters:** single shared value (e.g., "Deaths This Stream", "Wheels Spun")
- **Per-User Counters:** separate value per Twitch viewer (e.g., "Times Won", "Giveaway Entries")
- Increment from automations, entry actions, or viewer-points redemptions

**Counter Tiers:** Any counter can have a tier ladder (e.g. 0 = Bronze, 10 = Silver, 50 = Gold). The active tier updates automatically as values change and is shown on the Stats page. Use `{counterTier}` in chat or alert templates after an increment action, on a **Counter Tier Reached** automation trigger (the tier that was just gained), or `{counterTier:CounterName}` to read any counter's **current** tier for that user.

**Leaderboards in chat:** Use `{top5Counter:CounterName}` in any template to list the top 5 viewers on a per-user counter (e.g. `{top5Counter:Wins}` → `1. Alice 100, 2. Bob 80, 3. Charlie 60, …`). Global counters do not support this token.

### Chat Games
Run mass-entry chat games where viewers join from chat, stake a counter value, and get independent or shared outcomes. Managed in the **Chat Games** tab; each game is its own rule with the same trigger and action building blocks as Automations.

**Built-in presets**

| Preset | What it does |
|--------|--------------|
| **Heist** | Timed window; viewers bet a variable amount; each entrant gets an independent roll; winners double their stake |
| **Lottery** | Fixed entry fee; one winner takes the whole pool when the window closes |
| **Duel** | Instant per-user gamble — each trigger bets points with separate win/lose action phases |
| **Blank sandbox** | Timed session with free join — configure triggers and actions yourself |
| **Instant action** | No timed session — fires through the automation engine on trigger |

**Configure:** join command (with optional **aliases**), stake counter, win chance, payout mode (multiplier on stake or split pool), session duration, and chat messages for open/join/summary/cancel. Chain sounds, alerts, wheels, or other automations to open, join, resolve, win, or lose phases.

**Variables:** `{totalPool}`, `{totalPaidOut}`, `{winnersList}`, `{winnerCount}`, `{userStake}`, `{userPayout}`, and more — see [Message Variables](#message-variables).

### Queue System
Four independent queues keep everything organized, each shown as its own column on the Home page:

**Wheel Queue**
- Pending wheel loads and spins
- Shows what's next from automations, commands, or viewer point redemptions
- Controls: **Pause**, **Skip**, **Clear**

**Sound Queue**
- Audio files waiting to play
- Controls: **Pause**, **Skip**, **Clear**
- Sounds linked to a wheel play at spin time instead of the general queue

**Giveaway Queue**
- Active and pending viewer giveaways
- The current giveaway runs at the top; others start automatically when it ends
- Controls: **Pause**, **Skip**, **Clear**

**Alert Queue**
- On-screen alerts waiting to display in the Alert Box widget
- Plays queued stream-event alerts one at a time
- Controls: **Pause**, **Skip**, **Clear**

### Giveaway System
Run timed viewer-entry giveaways from automations or viewer point shop items:
- Chatters enter via a configurable command (default: `!giveaway`)
- Auto-spins the wheel after a configurable duration (minutes)
- Configurable open/close/winner chat announcements
- Duplicate-entry protection with per-user cooldown on the "already joined" reply
- Optional winner counter increment and winner TTS announcement

### Text-to-Speech
Speak winner announcements and alert callouts aloud, no account or API key required:
- Works out of the box with no setup
- Choose from a range of voices (e.g. Brian, Amy, Matthew)
- Configure voice and volume per automation, alert, or giveaway winner

### Per-Entry Actions
Each wheel entry can have its own actions when it wins:
- Play a sound file with volume control
- Send a custom chat message (supports variables)
- Increment a counter
- Trigger another automation (cascade into a second wheel!)
- Override the wheel's winner announcement
- Set a custom color for that entry's slice

---

## Integrations

Manage all connections from the **Integrations** page. **Twitch** is the only integration most streamers need. Everything else is optional.

### Twitch
- Sign in with your Twitch account using device-code OAuth (no manual token copy-paste)
- Grants chat read/write and EventSub access
- **Chat:** reads commands and sends bot messages
- **EventSub:** receives channel points, follows, subs, raids, bits, hype train, goals, ad breaks, shoutouts

### Tiltify *(optional)*
- Connect a Tiltify charity campaign via OAuth
- Polls for new donations and checks campaign totals and milestones
- Token auto-refresh, with a reconnect window if authentication expires mid-stream

### Discord Webhooks *(optional)*
- Under **Integrations → Discord Webhooks**, add one or more **named** webhooks (paste each channel webhook URL from Discord: Server Settings → Integrations → Webhooks)
- **Save**, then **Test** a webhook to confirm delivery
- In any automation, add the **Discord Webhook** action: pick one or more webhooks, reuse the text from your **Send Chat Message** action, and/or write a Discord-only message
- One automation can post to **multiple webhooks at once**
- The same variables (`{user}`, `{count}`, `{counterTier}`, etc.) are resolved before sending; Discord messages are capped at 2,000 characters
- If you previously had a single Discord webhook, it is migrated as **"Default"** automatically; older "send to Discord" checkboxes on Send Chat Message are converted to the Discord Webhook action

### Text-to-Speech
- Built-in, no account or API key required
- Works automatically for any automation, alert, or giveaway winner TTS action

### Want another integration?
ISB Suite is an ongoing project. If there's a platform or service you'd like integrated, [request it by opening an issue](https://github.com/Thadestroy/ISBSuiteReleases/issues). Feedback and ideas help shape what gets added next.

---

## Chat Commands

### Viewer Commands
| Command | Description |
|---------|-------------|
| `!join` | Join the current wheel (when a session is active) |
| `!points` | Check your viewer points balance (or your custom command name) |
| `!givepoints @user amount` | Give your own points to another viewer |
| `!gamble amount` | Wager points on a configurable win-chance roll |
| `!giveaway` | Enter an active giveaway |
| *any shop command* | Spend points on shop items you've configured |

### Mod & Broadcaster Commands
| Command | Description |
|---------|-------------|
| `!startwheelspin` | Start a new session with an empty wheel, enables `!join` |
| `!endwheelspin` | Stop accepting new entries (disables `!join`) |
| `!spinwheel` | Spin the wheel |
| `!resetwheelspin` | Clear the wheel and end the session |
| `!vpgive @user amount` | Give points to a viewer (admin give command) |
| `!customcommand` | Any custom command you've set up in Automations |

**Permission levels for custom commands:**
- **Everyone:** any viewer
- **Subscribers:** subs, VIPs, mods, broadcaster
- **VIPs:** VIPs, mods, broadcaster
- **Moderators:** mods and broadcaster only
- **Broadcaster:** broadcaster only

**Command aliases:** Automations, Chat Bot commands, Chat Games join commands, Viewer Points commands, shop items, and point drop claim commands can all define alternate names. Viewers can type any alias; the longest matching alias wins when several could match.

---

## Message Variables

Use these in chat messages, alert text, and TTS text:

| Variable | Value |
|----------|-------|
| `{user}` | Display name of the user who triggered the event |
| `{winner}` | The winning wheel entry's text (also works in automations triggered by a wheel entry win) |
| `{entry}` | Alias for `{winner}` |
| `{wheel}` | Name of the current wheel preset |
| `{amount}` | Bits, raid viewers, sub months, or gift count depending on context |
| `{reward}` | Channel point reward title |
| `{count}` | Counter value after the current increment |
| `{counter:CounterName}` | Current value of a specific named counter |
| `{counterTier}` | Tier label for the counter tied to the current action **or** the tier just gained on a Counter Tier Reached trigger |
| `{counterTier:CounterName}` | **Current** tier label for a specific named counter (live lookup; may differ from `{counterTier}` on tier triggers when multiple tiers are crossed at once) |
| `{top5Counter:CounterName}` | Top 5 users for a per-user counter, ranked: `1. Name value, 2. Name value, …` (empty when no data; per-user counters only) |
| `{balance}` | Viewer's current points balance |
| `{currencyName}` | Display name of the points currency |
| `{price}` | Cost of the shop item being redeemed |
| `{itemName}` | Name of the shop item being redeemed |
| `{command}` | The giveaway join command |
| `{duration}` | Giveaway duration in minutes |
| `{time}` | Cooldown seconds remaining (cooldown response messages) |

**Chat game variables** (resolve/summary messages): `{totalPool}`, `{totalPaidOut}`, `{totalLost}`, `{entryCount}`, `{winnerCount}`, `{winnersList}`, `{losersList}`, `{userStake}`, `{userPayout}`

**Example:** `"Congrats {user}! The wheel landed on {winner}! You've won {count} times total ({counterTier})."`

**Leaderboard example:** `"🏆 Top 5: {top5Counter:Wins}"`

---

## Wheel Editor

Create and customize wheels from the **Wheel Editor** tab.

### Wheel Settings
- **Wheel Name:** shown in Quick Launch
- **Allow `!join` from Chat:** let viewers add themselves via chat
- **Remove Winners After Spin:** auto-removes the winner slice so it can't win twice
- **Allow Duplicates:** permit the same name on the wheel more than once
- **Announce Winner in Chat:** send the winner message to Twitch chat automatically
- **Custom Winner Message:** override the default `The winner is: {winner}!` template

### Managing Entries
- Add entries one at a time with **+ Add Entry**
- Bulk import from text with **Bulk Import** (one entry per line)
- Edit text, color, and per-entry actions for each entry
- Duplicate entries to quickly create similar ones

### Color Customization
- Default palette: automatic rainbow distribution across all slices
- Custom palette: click the color squares in the editor to set hex values
- Per-entry color override: set a specific color for individual entries
- Twitch user colors: automatically applied when viewers `!join`

---

## Capture Setup (Window Capture)

ISB Suite renders your overlay in its own window with a transparent background. To show it on stream, capture that window in your streaming software (OBS, Streamlabs, or any tool with a Window Capture source).

1. Add a **Window Capture** source in your streaming software
2. Select the "ISB Suite - Capture" window
3. Capture Method "Windows 10"
4. Window Match Priority "Window title must match"
5. Use the **Overlay Layout Editor** inside the app to position widgets exactly where you want them on your stream

**Tips:**
- Overlay Layout visuals only appear on stream once a Window Capture of ISB Suite is added in your streaming software
- Winner announcements render centered on the wheel
- The spin pointer is always on the right side of the wheel
- Use layout hotkeys to switch between multiple named layouts without touching your streaming software
- Make sure the Window is capturing "ISBSuite.exe: ISB Suite - Capture"
- Verify that the Capture Method is using "Windows 10"

---

## Use Cases

| Scenario | How To |
|----------|--------|
| **Viewer Giveaway** | `!startwheelspin`, viewers `!join`, then `!spinwheel` |
| **Game Selection** | Create a preset with game names, Quick Launch, Spin |
| **Channel Points Auto-Spin** | Create automation: reward loads wheel and auto-spins |
| **Walk-on Sounds** | Create automation: first message plays a sound for a specific viewer |
| **Bits Celebration** | Create automation: 100+ bits plays a sound and shows an alert |
| **Custom Chat Command** | Create automation: `!gamepicker` (mods+) loads a wheel and auto-spins |
| **Cascading Wheels** | Entry action: trigger automation loads a second wheel when an entry wins |
| **Stream Deck** | Create automation with a broadcaster-only command, bind it to a Stream Deck button |
| **Points Shop Spin** | Create viewer points redeemable: viewers spend points to spin a wheel |
| **Point Drop Event** | Configure a point drop: image appears on overlay, first chatters to type claim points |
| **Live Alert on Follow** | Create alert rule: Follow shows a fade-in GIF and TTS "Thanks for the follow, {user}!" |
| **Heist Chat Game** | Chat Games preset: viewers `!heist 50` to stake points; resolve doubles winners' stakes |
| **Random Hype Sound** | Automation with Randomized Action and 3 action sets, each playing a different sound |
| **Live leaderboard in chat** | Custom command or timer automation: `Top 5: {top5Counter:Wins}` on a per-user counter |
| **Subathon Countdown** | Automation with Timer linked to a Timer Widget; overlay shows countdown before the action fires |
| **Custom Alert on tier up** | Custom Alert: Counter Tier Reached shows a GIF and TTS when a viewer hits Gold |
| **Discord milestone ping** | Automation: Counter Tier Reached → Discord Webhook action posts `{user}` hit `{counterTier}` to your Discord |
| **Command aliases** | Add `!pts` as an alias of `!points`, or `!heistgo` as an alias of your Heist join command |

---

## Overlay Layout Editor (Detailed)

Access via the **Overlay Layout** tab in the main navigation.

> Remember: nothing from the Overlay Layout appears on your broadcast until you add a **Window Capture** of the ISB Suite window in your streaming software.

### Layout Management
- Create multiple named layouts (e.g. "Main Scene", "Wheel Scene", "Just Chatting")
- Switch active layout from the list, or assign a global hotkey to each layout
- All widgets in the active layout are rendered on the capture stage

### Widget Controls
- Click to select a widget; resize handles appear on all 8 sides
- Drag to reposition
- Set visibility per widget, or assign a hotkey to toggle it on/off during stream
- Preview All mode shows live renders of all widgets simultaneously

### Layout Transitions
- Configure animated transition effects between layout switches

### Timer Widget
Display a live countdown on your overlay when an automation (or chat game) uses the **Timer** action:

1. In **Overlay Layout**, add a **Timer Widget** and create or select a named preset
2. In an automation's actions, enable **Timer**, set the duration, and link the same preset
3. When the rule fires, the widget counts down; chat, alerts, and other deferred actions wait until it reaches zero

Multiple rules can share one preset — they queue automatically so only one countdown runs at a time. Use **None (background only)** on the Timer action if you want a delay without showing anything on the overlay.

---

## Character Studio

*Coming soon.*

---

## Viewer Points (Detailed)

Access via the **Viewer Points** tab.

### Creating a Currency
1. Give it an internal name and display name
2. Choose or create a per-user counter to back the balances
3. Set the balance command (e.g. `!points`) and response template
4. *(Optional)* Add **Earn Rules** to award points automatically (see below)
5. Add shop items viewers can spend points on

### Earn Rules
On each currency's editor, open **Earn Rules** and click **+ Add Earn Rule**.

**Watching (live presence)** — award points on a timer while a viewer is in chat during a live stream:
1. Set **Rule Name** and choose trigger **Watching (live presence)**
2. **Award every:** interval (seconds, minutes, or hours)
3. **Points to Award:** how many points per interval
4. Save the currency

**Prerequisite:** enable **Stats → Watch Time** and ensure Twitch is connected with the `moderator:read:chatters` scope (reconnect in Settings if watch-time accrual is paused). Watching earn rules use the same once-per-minute live poll as watch time. If Watch Time is off, the app prompts you to enable it before adding or saving an **enabled** Watching rule.

> Additional earn triggers (chat messages, follows, subs, bits, raids, etc.) are planned for a future update.

### Point Drops (Detailed)
Configure drops under the **Point Drops** sub-tab:
- **Drop interval:** how often (in minutes) the drop can spawn
- **Spawn chance:** percentage probability at each interval check
- **Display duration:** how long the drop image stays visible
- **Claim command:** the chat command viewers type to claim
- **Max claimants:** how many viewers can claim before the drop ends
- **Point pool:** randomized range (min/max) split among claimants
- **Drop image/GIF:** shown in the Point Drop widget on your overlay
- Optional claim sound with volume control

---

## Tips & Tricks

### Hands-Free Streaming
- Set up chat commands for everything
- Let mods control the wheel via chat
- Use channel points for viewer-driven spins
- Use point shop redeemables for viewer-controlled sounds and wheels

### Cascading Wheels
1. Create multiple wheel presets (e.g. "Category Picker" and "Game Picker")
2. On an entry in "Category Picker", add the action "Trigger Automation"
3. The automation loads the "Game Picker" wheel
4. Result: winning "Survival Games" automatically loads a wheel full of survival games

### Walk-on Sounds
1. Create automation: **First Message Per Stream** for a specific username
2. Enable "Only When Live" to skip during setup/starting-soon
3. Attach a sound file with volume adjusted to taste

### Stream Deck Integration
1. Create a custom command automation (e.g. `!quickspin`) set to Broadcaster Only
2. In Stream Deck, use the "Twitch Chat" action and send `!quickspin`
3. One button loads and spins any preset instantly

### Tracking Statistics
- Use global counters for stream-wide stats (deaths, total spins)
- Use per-user counters to track viewer participation
- Enable **Counter Tiers** on the Stats page to label milestones (Bronze/Silver/Gold, rank names, etc.)
- Display live counter values in chat with `{count}` (after an increment or on a tier trigger) or `{counter:CounterName}` (any time)
- Show the tier a viewer **just reached** with `{counterTier}` on a **Counter Tier Reached** automation; use `{counterTier:CounterName}` for their **current** tier on that counter
- Announce a per-user counter leaderboard with `{top5Counter:CounterName}` (top 5 viewers by value)

### Tier milestone automations
1. Enable tiers on a counter on the **Stats** page (threshold + label ladder)
2. Create an automation with trigger **Counter Tier Reached** and select that counter
3. Use `{user}` and `{counterTier}` in chat or alert text — `{counterTier}` is the label for **this** tier crossing (not the final tier if several were crossed at once)

### Multi-Trigger Automations
A single automation can respond to multiple triggers. For example, play the same hype sound on any of: a Tier 2 sub, a 100-bit cheer, or a 5-viewer raid. Add as many triggers as you need on one rule instead of maintaining separate rules.

### Chained Automations
1. Create automation A (e.g. a chat command) that runs sound/chat actions, then **Run Automation** targeting automation B
2. Automation B can itself run another automation — every hop still has `{user}` and the rest of the original chatter's variables
3. Use this for multi-step flows (announce → timer → wheel) without re-entering the same user context
4. Loops are detected automatically; keep intentional chains under the 20-hop limit

### Discord from Automations
1. Add named webhooks under **Integrations → Discord Webhooks** and Test each one
2. On an automation, enable the **Discord Webhook** action and select one or more webhooks
3. Reuse your Send Chat Message text, write a Discord-only message, or both

---

## Updates

ISB Suite automatically checks for updates on launch and will notify you when a new version is available. Updates are downloaded and installed with a single click.

---

## Support & Feedback

ISB Suite is an ongoing project and your input shapes where it goes next. Bug reports, feature requests, and ideas are all fully welcomed.

- **Report a bug or request a feature:** [Open an issue](https://github.com/Thadestroy/ISBSuiteReleases/issues)
- **Upgrade to Pro:** [Purchase a license key](https://payhip.com/b/dXKjz)

---

## FAQ

### Cursor disappears in a fullscreen game (especially Minecraft)?

**Symptom:** You're playing in **fullscreen** with OBS running. Your mouse cursor **vanishes on your physical monitor**, but it may still appear in the OBS preview or on stream. This often shows up when you have **Game Capture** for the game and a **Window Capture** (Windows 10 / WGC) source for **ISB Suite — Capture** stacked on top.

**This is not an ISB Suite bug.** It is a known interaction between **Windows Graphics Capture (WGC)** and certain **fullscreen** games. WGC forces a software cursor; in **exclusive fullscreen**, the game takes over the display and Windows often **cannot draw that cursor on your monitor**. Windowed and borderless modes usually work fine because the desktop compositor (DWM) is still in charge.

**Minecraft Java Edition** is the most commonly reported example (OpenGL + exclusive fullscreen). Many streamers see the cursor return when switching Minecraft to the **Vulkan** renderer (Options → Video), while keeping **Fullscreen** on. Recent Java versions also have a separate **Exclusive Fullscreen** toggle — turning that **off** (and restarting the game) often helps even on OpenGL.

**Other games can hit the same issue** depending on their **rendering engine** and **fullscreen mode**, not just Minecraft. OpenGL games in true exclusive fullscreen are the most affected; DirectX and Vulkan titles vary. Games launched with **"Disable fullscreen optimizations"** checked in Windows compatibility settings are more likely to break.

**Things to try (keep ISB on WGC for alpha):**

1. **Minecraft:** switch to the **Vulkan** renderer, or turn **Exclusive Fullscreen** off if available.
2. **Any game:** ensure **"Disable fullscreen optimizations"** is **unchecked** on the game’s `.exe` (Properties → Compatibility).

If the cursor works in windowed mode but not fullscreen, the cause is almost certainly the game’s fullscreen path plus WGC, not the Capture Window itself.

---

## Troubleshooting

### "Twitch Not Connected"
1. Go to the **Integrations** tab
2. Click **Connect Twitch** and follow the device-code login
3. Grant all requested permissions for chat and EventSub

### Chat Commands Not Working
- Verify the Twitch connection is active on the Integrations page
- Commands are case-insensitive but must match exactly (e.g. `!spinwheel` not `!spin wheel`)
- Check the user has the required permission level for custom commands

### Channel Points Not Triggering
- Verify the EventSub connection is shown as connected on the Integrations page
- The reward title in the automation must match your Twitch reward title exactly
- Redeem the reward once while connected; it will auto-populate the reward ID for reliable future matching

### Audio Not Playing
- Verify the sound file path is correct and the file still exists
- Check the volume isn't set to 0
- Supported formats: `.mp3`, `.wav`, `.mp4`, `.m4a`, `.wma`
- Check the Sound Queue isn't paused

### Overlay / Widgets Not Showing on Stream
- Make sure you've added a **Window Capture** of the ISB Suite window in your streaming software
- Confirm the correct widget is placed on the active layout in Overlay Layout
- Check the widget's visibility is enabled and it isn't cropped out of your capture

### Tiltify Not Triggering *(optional integration)*
- Verify the Tiltify integration shows as connected on the Integrations page
- If the session token expired, the app will show a reconnect window; re-authenticate
- Donation polling runs on a short interval, so there may be a brief delay

### Discord Webhook Not Sending *(optional integration)*
- Verify your named webhook(s) are saved under **Integrations → Discord Webhooks**
- Use **Test** on Integrations to confirm the webhook works before relying on automations
- Check that the automation includes the **Discord Webhook** action and that the intended webhook(s) are selected
- Webhook URLs must start with `https://discord.com/api/webhooks/` (legacy `discordapp.com` URLs also work)

### Alerts Not Showing
- Make sure an **Alert Box** widget is placed on the active layout in Overlay Layout
- Verify the alert rule is enabled in the **Alerts** tab (built-in type sections or **Custom Alerts**)
- Check that the trigger threshold (e.g. minimum bits) is being met
- If several alerts match the same event, only the most specific one fires

### Point Drops Not Spawning
- Check that the Point Drop widget is placed on the active layout in Overlay Layout
- Verify the stream is detected as live (or disable "only when live" for testing)
- The spawn interval check runs on a timer, so wait for the configured interval to elapse
