# Tawk.to Chatbot Integration

This document explains how the Tawk.to chatbot integration works in the Shikshanation website.

## Overview

The Tawk.to chatbot is integrated using their default chat widget. The widget appears as Tawk.to's standard chat button and provides a complete chat interface when clicked.

## Implementation Details

### Files Modified

1. **`src/hooks/useTawkTo.ts`** - Custom hook for Tawk.to initialization
2. **`src/components/TawkToWidget.tsx`** - Component that initializes Tawk.to
3. **`src/app/layout.tsx`** - Added TawkToWidget to the layout
4. **`src/components/FloatingContactWidget.tsx`** - Removed custom chatbot button
5. **`src/components/index.tsx`** - Exported TawkToWidget

### How It Works

1. **Initialization**: The TawkToWidget component loads the Tawk.to script automatically
2. **Default Widget**: Tawk.to's default chat button appears in the bottom-right corner
3. **Full Functionality**: Users get the complete Tawk.to chat experience
4. **No Custom Control**: The widget is fully managed by Tawk.to

### Features

- ✅ Uses Tawk.to's default, fully-featured chat widget
- ✅ Automatic positioning and styling by Tawk.to
- ✅ Complete chat functionality (typing indicators, file uploads, etc.)
- ✅ Mobile responsive design by Tawk.to
- ✅ Professional chat interface

### Tawk.to Configuration

- **Property ID**: `68b688a5e2f918192683808b`
- **Widget ID**: `1j44gbit5`
- **Script URL**: `https://embed.tawk.to/68b688a5e2f918192683808b/1j44gbit5`

## Usage

Users can:
1. See Tawk.to's chat button in the bottom-right corner of the page
2. Click the button to open the chat interface
3. Chat with support agents through the full Tawk.to interface
4. Minimize/maximize the chat as needed

## Other Contact Options

The floating contact widget still provides:
- **Call Button**: Direct phone calling (+91 98211 15117)
- **WhatsApp Button**: Opens WhatsApp chat

## Browser Compatibility

The integration works with all modern browsers supported by Tawk.to.

## Troubleshooting

If the chat doesn't appear:
1. Check browser console for JavaScript errors
2. Verify the Tawk.to script is loading correctly
3. Ensure the property ID and widget ID are correct
4. Check if ad blockers are interfering with the widget
