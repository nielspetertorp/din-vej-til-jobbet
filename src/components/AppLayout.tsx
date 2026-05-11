import { Link } from 'react-router-dom';
import type { PropsWithChildren } from 'react';
export const AppLayout=({children}:PropsWithChildren)=> <div><header className='top'><div><strong>Din vej til drømmejobbet</strong><p className='muted'>Afklaring med Krifa</p></div><nav><Link to='/'>Kort</Link><Link to='/guide'>Guide</Link></nav></header><main>{children}</main><footer>Udviklet som refleksionsværktøj · Krifa (diskret afsender)</footer></div>
