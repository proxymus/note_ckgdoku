CKEDITOR.dialog.add( 'noteDialog', function( editor ) {
    return {
        title: 'Note Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
			{
                id: 'tab-basic',
                label: 'Basic Note',
                elements: [
                    {
						type: 'radio',
						id: 'notetype',
						label: editor.lang.note.selectOption,
						items: [ [ '<img src="/lib/plugins/ckgedit/ckeditor/plugins/note/icons/note_basic.png">', 'basic' ], [ '<img src="/lib/plugins/ckgedit/ckeditor/plugins/note/icons/note_important.png">', 'important' ] , [ '<img src="/lib/plugins/ckgedit/ckeditor/plugins/note/icons/note_tip.png">', 'tip' ] , [ '<img src="/lib/plugins/ckgedit/ckeditor/plugins/note/icons/note_warning.png">', 'warning' ] ],
						style: 'color: black',
						'default': 'basic',
					},
					{
                        type: 'text',
                        id: 'note',
                        label: editor.lang.note.content,
                        validate: CKEDITOR.dialog.validate.notEmpty( "Note field cannot be empty." )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;

            var note = editor.document.createElement( 'note' );
            note.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'note' ) );
			
			//get the note type
			var noteTypeValue = dialog.getValueOf( 'tab-basic', 'notetype' );
			
			
			if (noteTypeValue == 'basic') {
				noteTypeValue = '<note>';
			} else {
				noteTypeValue = '<note ' + noteTypeValue + '>';
			}
			
			//get the note text
			var noteText = dialog.getValueOf( 'tab-basic', 'note' );
			//insert the note
			editor.insertText ( noteTypeValue + noteText + '</note>' )

        }
    };
});