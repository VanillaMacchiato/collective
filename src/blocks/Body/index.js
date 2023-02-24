import { useContext } from 'react';
import WpArticles from "../WpArticles"

import { MeContext } from '@/contexts/MeContext';

const Body = ({ children }) => {

    const data = useContext(MeContext);

    if (data['wp']) {

        return (
            <>
                <div className="col-span-12 lg:col-span-4 justify-center justify-self-center lg:justify-self-start mt-8">
                    <WpArticles wp_data={data['wp']} />
                </div>
                <div className="mx-auto max-w-80 col-span-12 lg:col-span-8 justify-center justify-self-center lg:justify-self-start mt-8">
                    <div className="md:flex mt-14 text-center md:ml-8">
                        {children}
                    </div>
                </div>
            </>
        )
    } else {
        return (

            <div className="col-span-12 lg:col-span-10 justify-center justify-self-center lg:justify-self-start mt-8">
                {children}
            </div>

        )
    }

}

export default Body