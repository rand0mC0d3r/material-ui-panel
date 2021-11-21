import SettingsIcon from '@material-ui/icons/Settings';
import { Skeleton } from '@material-ui/lab';
import MupStatus from '../components/MupStatus';

const ConfigStatus = () => {
  return <>
    <MupStatus
      asMenu={<div style={{ width: '350px', padding: '16px', margin: '16px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed euismod nisi. Duis nec commodo augue. Curabitur fringilla efficitur lacus, scelerisque convallis ex consequat at. Maecenas gravida volutpat porta. Integer viverra et sapien eget dictum. Sed fringilla pharetra bibendum. Cras gravida diam in orci hendrerit commodo. Integer eget lobortis leo, a pellentesque tortor. Fusce vel libero pulvinar, pellentesque neque et, aliquam mauris. Suspendisse at vulputate sapien, eget sodales elit. Integer eleifend blandit dolor, ac ultricies nibh consectetur ut.
        <div style={{marginTop: '16px', display: "flex", gap: "8px", flexDirection: "column"}}>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} />
          <Skeleton variant="rect" width={'100%'} height={200} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
      </div>}
      id='statusPopoverMenu'
      tooltip="Popover Menu ..."
      elements={[{ icon: <SettingsIcon />}]}
    />
  </>
}

export default ConfigStatus;
