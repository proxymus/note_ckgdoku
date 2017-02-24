# note_ckgdoku
Plugin to insert the note source code in dokuwiki using the ckgdoku editor (https://github.com/turnermm/ckgdoku).

Unzip the files to your `dokuwiki/lib/plugins/ckgedit/ckeditor/plugins/` folder and rename the folder to **note**.

**Dokuwiki configuration**

Add **Note** to the dokuwiki **plugin»ckgedit»extra_plugins** configuration.

Edit the `dokuwiki/lib/plugins/ckgedit/ckeditor/config.js` file and add **note**.

Example:
b.extraPlugins="signature,footnote,shortcuts,fontAssist,tags,timestamp,headerbuttons,**note**";
