import { Box, TextField } from '@material-ui/core';
import { ChromeReaderMode } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import { useState } from 'react';
import MupPanel from '../components/MupPanel';

const ComplexPanel = () => {
  const [value, setValue] = useState('Sample persisten text...');
  const handleChange = event => { setValue(event.target.value) };

  return <MupPanel
    id="complexityPanel"
    title="Sample panel long long text with many details"
    subTitle="Sample sub-title text"
    icon={<ChromeReaderMode />}
  >
    <Box display="flex" flexDirection="column" style={{ gap: "16px" }}>
      <div>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} />
      </div>
      <div>
        <Skeleton variant="rect" width={'100%'} height={400} />
      </div>
      <div>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </div>
      <div>
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={10}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    </Box>
  </MupPanel>
}

export default ComplexPanel;
