import Link from 'next/link';

export default () => (
  <div>
    <ul>
      <li><Link href="/random-key"><a>Random Key</a></Link></li>
      <li><Link href="/index-key"><a>Index Key</a></Link></li>
      <li><Link href="/mobx"><a>Mobx DevTools</a></Link></li>
    </ul>
  </div>
);
