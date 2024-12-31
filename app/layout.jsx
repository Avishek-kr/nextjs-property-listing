import '@/assets/styles/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
    title: 'Property pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property',
}

const layout = ({ children }) => {
    return (<html>
        <body>
            <main>
                <Navbar />
                {children}
            </main>
        </body>
    </html>
    )
}

export default layout