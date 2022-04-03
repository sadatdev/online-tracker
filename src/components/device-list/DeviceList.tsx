import React from 'react';
import { IDevice } from 'types/IDevice';
import { strings } from 'utils/strings';
import './device-list.scss';

interface IDeviceListProps {
    devices: IDevice[] | undefined;
}

export const DeviceList = ({ devices }: IDeviceListProps) => {
    const totalDevices = devices?.length || 5;
    const divideInto = 360 / totalDevices;

    return (
        <div className="outer-ring">
            {devices?.map((device) => (
                <div
                    key={device.id}
                    className="dot"
                    style={{ transform: `rotate(${device.id * divideInto}deg)` }}
                ></div>
            ))}

            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center uppercase w-12 font-medium leading-tight">
                <span className="text-7xl font-thin">{totalDevices}</span> <br />
                <span>{strings.device_online}</span>
            </h1>
        </div>
    );
};
