import Link from 'next/link';
import ColorSetPure from '../components/ColorSetPure';

export default () => (
  <div>
    <h2>Pure</h2>
    <Link href="/"><a>Back</a></Link>
    <ColorSetPure />
  </div>
);
