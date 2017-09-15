import Link from 'next/link';
import ColorSetIndexKey from '../components/ColorSetIndexKey';

export default () => (
  <div>
    <h2>Index Key</h2>
    <Link href="/"><a>Back</a></Link>
    <ColorSetIndexKey />
  </div>
);
