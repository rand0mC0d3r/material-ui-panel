/* eslint-disable import/no-anonymous-default-export */
import MupStatus from '../components/MupStatus';
import MupStatusChild from '../components/MupStatusChild';

export default () => <MupStatus
  id='fooImageStatus'
  style={{ minWidth: '32px' }}
  tooltip="User Avatar"
>
  <MupStatusChild mask image='https://picsum.photos/32/32' />
</MupStatus>
