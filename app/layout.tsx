import { Poppins } from 'next/font/google';
import '@/src/views/scss/styles.scss';
//*> Import the component that provides the shared state to the rest of the application.
import { SharedStateProvider } from '@/src/common/store';

//*> Define the Poppins font family and specify the weights to be used.
const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
 return (
  <html lang='en'>
   <body className={poppins.className}>
    {/* //*> Use the SharedStateProvider to provide the shared state to the children components. */}
    <SharedStateProvider>{children}</SharedStateProvider>
   </body>
  </html>
 );
};

export default RootLayout;
