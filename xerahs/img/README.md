# XerahS Images

Place screenshots and images for the XerahS microsite here.

## Recommended Screenshots
Based on the XerahS source code, please capture the following views to showcase the application's core features:

### 1. Main Application
- **Main Window** (`MainWindow.axaml`): The landing screen of the application.
- **Application Settings** (`ApplicationSettingsView.axaml`): Showcasing the "Modern Capture" toggle and theme settings.
- **History View** (`HistoryView.axaml`): Showing the list of past captures/uploads.

### 2. Workflows & Automation
- **Workflows Manager** (`WorkflowsView.axaml`): The list of configured dedicated workflows.
- **Workflow Editor** (`WorkflowEditorView.axaml`): The detailed editor showing Task Chaining (Job selection) and Destination overrides.

### 3. Capture Experience
- **Region Capture Overlay**: Capture the screen while the region selection tool is active (Blue border/crosshair).
- **Region Capture Toolbar**: The toolbar that appears during/after region selection.

### 4. XerahS Editor
- **Editor Window**: An open image in the editor showing annotations (Arrows, Text, Blur) and the toolbar.
- **Effect Settings** (`ImageEffects`): If accessible, showing the image effects configuration.

### 5. Tools & Uploading
- **Destinations** (`DestinationSettingsView.axaml`): Show the list of available uploaders/plugins.
- **Color Picker** (`ColorPickerDialog.axaml`): The visual color selection tool.

## File Structure

- `placeholder.png`: Default placeholder.
- `xerahs/`:
    - `main-window.png`
    - `destinations.png`
    - `settings-general.png`
    - `workflows-list.png`
    - `workflow-editor.png`
    - `color-picker.png`
- `editor/`:
    - `editor-main.png`
    - `editor-effects.png`

## Usage

Reference images in HTML using `/xerahs/img/filename.png` or `/xerahs/img/folder/filename.png`.
