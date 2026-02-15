# The Wheel Spin

A spinning wheel app for Twitch streamers | run giveaways, pick games, and create interactive moments with your viewers!

![Windows](https://img.shields.io/badge/Windows-10%2B-blue?logo=windows)
[![Latest Release](https://img.shields.io/github/v/release/Thadestroy/WheelSpinPickerReleases?label=Download)](https://github.com/Thadestroy/WheelSpinPickerReleases/releases/latest)

---

## Download & Install

**[Download Latest Version](https://github.com/Thadestroy/WheelSpinPickerReleases/releases/latest)**

### Installation Steps
1. Download the installer (`TheWheelSpinSetup_X.X.X.exe`)
2. Run the installer | **Windows may show a security warning:**
   - Click **"More info"**
   - Then click **"Run anyway"**
   - *(This appears because the app isn't signed with an expensive certificate yet)*
3. Follow the wizard

### Requirements
- Windows 10 or later
- Twitch account (optional, for chat integration)

---

## Features Overview

### Beautiful Wheel Display
- Colorful animated wheel with smooth spin animations
- Custom color palettes for entire wheels or individual entries
- Displays viewer Twitch name colors on wheel slices
- Transparent background for easy OBS window capture overlay
- Customizable winner announcements with variable substitution

### Twitch Chat Integration
- Viewers join the wheel via `!join` command
- Mods and broadcaster control spins from chat
- Perfect for hands-free streaming
- Built-in crash recovery

### Powerful Automation System
Create automations that respond to Twitch events:
- **Channel Point Redemptions** - trigger wheels, sounds, or counters
- **Walk-on Sounds** - play audio when specific users first chat
- **Bits & Gift Subs** - react to exact bit amounts or gift counts
- **Custom Chat Commands** - create commands like `!gamepicker` with permission levels
- **Multiple Triggers** - one automation can respond to multiple events

### Per-Entry Actions
Each wheel entry can have custom actions when it wins:
- **Play Sounds** - queue custom audio files with volume control
- **Send Chat Messages** - respond with custom messages (supports variables)
- **Increment Counters** - track stats globally or per-user
- **Trigger Automations** - chain wheels together (winner triggers another wheel)
- **Custom Colors** - override wheel colors for specific entries

### Counter System
Track numbers that persist across streams:
- **Global Counters** - single shared value (e.g., "Deaths This Stream")
- **Per-User Counters** - track values for each viewer (e.g., "Times Joined")

### Presets & Sessions
- Quick-launch your favorite wheels with one click
- Bulk import entries from text (one per line)
- Edit entry text, colors, and actions individually
- Session management with queue system

### Queue Management
Two separate queues for organized automation:
- **Wheel Queue** - pending wheel loads and spins
- **Sound Queue** - audio playback with volume control
- Pause, skip, or clear either queue independently
- Visual status indicators and item counts

### Stream Deck Ready
- Create custom commands for any preset
- One button press loads and optionally spins the wheel
- Perfect for seamless stream integration

---

## Chat Commands

### Viewer Commands
| Command | Description |
|---------|-------------|
| `!join` | Join the current wheel (when joining is enabled) |

### Mod & Broadcaster Commands
| Command | Description |
|---------|-------------|
| `!startwheelspin` | Start a new session with an empty wheel, enables `!join` |
| `!endwheelspin` | Stop accepting new entries (disables `!join`) |
| `!spinwheel` | Spin the wheel |
| `!resetwheelspin` | Clear the wheel and end the session |
| `!customcommand` | Any custom command you've created in Automations (e.g., `!gamepicker`) |

**Note:** Custom commands support permission levels:
- **Everyone** - any viewer can use
- **Subscribers** - subs, VIPs, mods, and broadcaster
- **VIPs** - VIPs, mods, and broadcaster only
- **Moderators** - mods and broadcaster only
- **Broadcaster** - broadcaster only

---

## Automation System

Automations let you respond to Twitch events automatically. Access via the **Automations** button in the main window.

### Trigger Types

**Channel Point Redemptions**
- Link to reward titles (auto-detects reward IDs)
- Load wheels, play sounds, increment counters
- Send custom chat responses

**Walk-on Sounds (First Message Per Stream)**
- Play audio when specific users first chat each stream
- Option to only trigger when live (ignore "starting soon" screens)
- Perfect for VIP/sub walk-on sounds

**Bits**
- Trigger on exact bit amounts (e.g., exactly 100 bits)
- Great for special effects or wheel spins

**Gift Subs**
- Trigger when someone gifts an exact number of subs
- Celebrate gift sub trains with sounds or wheels

**Custom Chat Commands**
- Create your own commands (e.g., `!gamepicker`, `!minigame`)
- Set permission levels (everyone, subs, VIPs, mods, broadcaster)
- Load wheels with or without auto-spin

### Automation Actions

Each automation can perform multiple actions:
- **Load & Spin Wheel** - choose any saved preset, optionally auto-spin
- **Play Sound** - queue audio files with volume control (0-200%)
- **Send Chat Message** - respond with custom text (supports variables)
- **Increment Counter** - update global or per-user counters

### Message Variables

Use these in chat messages and entry actions:
- `{winner}` - the winning entry's text
- `{user}` - the user who triggered the automation
- `{wheel}` - the current wheel's name
- `{entry}` - alias for `{winner}`
- `{count}` - display counter value (after increment of that automation)
- `{counter:CounterName}` - display value of a specfic counter (auto detects for per-user based off Twitch account)

**Example:** `"Congrats {user}! The wheel landed on {winner}! Total wins: {count}"`

---

## Wheel Editor

Create and customize wheels with the **Wheel Editor** (main window button).

### Basic Settings
- **Wheel Name** - identify your wheel in quick launch
- **Allow !join from Chat** - let viewers add themselves via `!join`
- **Remove Winners After Spin** - auto-remove winners (no duplicates)
- **Allow Duplicates** - permit the same name multiple times
- **Announce Winner in Chat** - send winner message to Twitch chat
- **Custom Winner Message** - override default announcement template

### Managing Entries

**Add Entries:**
- Add one-by-one with the **+ Add Entry** button
- Bulk import from text with **Bulk Import** (one entry per line)
- Edit text, color, and actions for each entry individually

**Entry Actions:**
Click the **Actions** button on any entry to configure:
- Play a sound file when this entry wins
- Send a custom chat message (supports variables)
- Increment a counter (choose from saved counters)
- Trigger another automation (chain wheels together!)
- Override announcement (disable wheel's default announcement)
- Set custom color (override wheel palette for this entry)

**Entry Management:**
- Duplicate entries to quickly create similar ones
- Delete entries individually

### Color Customization
- Use default color palette (automatic rainbow colors)
- Create custom color palettes (click color squares to edit)
- Override colors per-entry for precise control

---

## OBS Setup

1. Add **Window Capture** source in OBS
2. Select "The Wheel Spin" window
3. Crop to show just the wheel area (it has a transparent background!)
4. Control everything via chat | no need to click on the app during stream

**Tips:**
- The left control panel won't be captured if you crop correctly
- Winner overlay appears centered on the wheel
- Pointer is always on the right side of the wheel

---

## Use Cases

| Scenario | How To |
|----------|--------|
| **Viewer Giveaway** | `!startwheelspin` → viewers `!join` → `!spinwheel` |
| **Game Selection** | Create a preset with game names → Quick Launch → Spin |
| **Channel Points - Auto Spin** | Create automation: reward → load wheel + auto-spin |
| **Walk-on Sounds** | Create automation: first message → play sound for specific users |
| **Bits Celebration** | Create automation: 100 bits → play sound + increment counter |
| **Custom Chat Command** | Create automation: `!gamepicker` (mods+) → load wheel + auto-spin |
| **Cascading Wheels** | Entry action: trigger automation → loads second wheel when entry wins |
| **Stream Deck** | Create automation with custom command → bind to Stream Deck button |

---

## Queue System

The app has two separate queues (view in left panel):

### Wheel Queue
- Pending wheel loads and spins
- Shows what's coming next from automations or commands
- Controls: **Pause**, **Skip**, **Clear**

### Sound Queue
- Audio files waiting to play
- Switch tabs to view current sounds
- Controls: **Pause**, **Skip**, **Clear**

**Queue Behavior:**
- Wheel queue processes one item at a time
- Sound queue plays audio files sequentially
- Pausing prevents new items from starting
- Skipping moves to the next item immediately
- Sounds linked to wheels will play when wheel spins instead of waiting in sound queue

---

## Counters

Create and manage counters via the **Automations** window.

### Counter Types

**Global Counter:**
- Single shared value across all users
- Example: "Deaths This Stream", "Wheels Spun"

**Per-User Counter:**
- Separate value for each Twitch user
- Example: "Times Won", "Appearances on Wheel"
- Automatically tracks display names

### Counter Settings
- **Name** - display name for the counter
- **Scope** - Global or Per-User

### Using Counters
Increment counters from:
- Automation rules (when triggered)
- Entry actions (when entry wins)

View counter values with `{counter:CounterName}` to just show value or use `{count}` for times the count is incrememented.

---

## Tips & Tricks

### Hands-Free Streaming
- Set up chat commands for everything
- Let mods control the wheel via chat
- Use channel points for viewer-driven spins

### Cascading Wheels
1. Create multiple wheel presets (e.g., "Category Picker" and "Game Picker")
2. Add entry action: "Trigger Automation"
3. The triggered automation loads the next wheel
4. Result: winning "Survival" loads a wheel of Survival games!

### Walk-on Sounds for Viewers
1. Create automation: "First Message Per Stream" → specific username
2. Set "Only When Live" to avoid triggering during setup
3. Add sound file with volume adjusted

### Stream Deck Integration
1. Create custom command automation (e.g., `!quickspin`)
2. Set permission to "Broadcaster Only"
3. In Stream Deck, use "Twitch Chat" action
4. Send message: `!quickspin`
5. One-button wheel launch!

### Tracking Statistics
- Use global counters for stream-wide stats
- Use per-user counters to track viewer participation
- Display counter values in chat messages with `{count}` (Used when a counter increments)
- Display specfic counter value in chat messages with `{counter:CounterName}` (Used to show saved count)

---

## Updates

The app automatically checks for updates on launch and will notify you when a new version is available.

---

## Support & Feedback

Found a bug or have a feature request? [Open an issue](https://github.com/Thadestroy/WheelSpinPickerReleases/issues)

---

## Advanced Features

### Custom Winner Announcements
Override the default "The winner is: {winner}!" message:
- Set in Wheel Editor under wheel settings
- Or use per-entry actions to customize per winner
- Supports all message variables

### Color Palettes
- Default palette: automatic rainbow distribution
- Custom palette: click colors in editor to choose hex values
- Per-entry colors: override palette for individual entries
- Twitch user colors: automatic for `!join` participants

### Session Management
Sessions track the current wheel state:
- **Active** - `!join` enabled, accepting entries
- **Spinning** - `!join` disabled, wheel in motion
- **Idle** - no session, use Quick Launch to start

Status shown in left panel with visual indicators.

---

## Troubleshooting

### "Twitch Not Connected"
1. Click the **⚙** settings button in title bar
2. Log in with your Twitch account
3. Grant permissions for chat and EventSub

### Chat Commands Not Working
- Verify Twitch connection in settings
- Check that commands are typed exactly (case-insensitive)
- Ensure user has required permissions for custom commands

### Channel Points Not Triggering
- Verify EventSub connection in settings (separate from chat)
- Check automation reward title matches exactly
- Try redeeming once to populate the reward ID automatically

### Audio Not Playing
- Verify sound file path is correct
- Check volume isn't set to 0
- Ensure file format is supported (.mp3, .wav, .mp4, .m4a, .wma)
- Check Sound Queue isn't paused

### Wheel Limit Reached (Free Version)
- Delete an existing wheel to create a new one
