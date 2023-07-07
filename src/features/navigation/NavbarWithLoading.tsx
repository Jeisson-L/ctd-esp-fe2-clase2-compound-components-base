import Navbar from './navigation.component';
import { withLoading } from 'features/loading/withLoading';

const NavbarWithLoading = withLoading(Navbar);
export default NavbarWithLoading