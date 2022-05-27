import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

function Editors() {
  return (<div style={{ width: "100%", padding: "8px" }}>
  <CKEditor
     editor={Editor}
     onBlur={(event, editor) => {      }}
  />
</div>
  )
}

export default Editors