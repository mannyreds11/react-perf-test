import Link from 'next/link';
import ColorSetRandomKey from '../components/ColorSetRandomKey';

export default () => (
  <div>
    <h2>Random Key</h2>
    <Link href="/"><a>Back</a></Link>
    <ColorSetRandomKey />
  </div>
);

