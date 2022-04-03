import { Button } from 'components/button/Button';
import React from 'react';
import { strings } from 'utils/strings';

export const DeviceListFooter = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 py-5 bg-black bg-opacity-20 flex space-x-5 justify-center items-center ">
            <Button
                text={strings.notify}
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800"
            />
            <Button text={strings.logout} className="bg-gray-700 hover:bg-gray-600" />
        </div>
    );
};
