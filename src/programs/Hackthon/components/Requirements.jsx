import Card from "../../../components/card";
import WhatToCreate from "./WhatToCreate";
import WhatToSubmit from "./WhatToSubmit";

const Requirements = () => {
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto  p-5 mx-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Requirements
                    </div>
                    <div className='flex gap-3'>
                    </div>
                </header>
                <div>
                    <WhatToCreate />
                    <WhatToSubmit />
                </div>
            </Card>
        </div>
    );
};

export default Requirements;
