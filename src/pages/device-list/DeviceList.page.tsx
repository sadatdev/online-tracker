import { DeviceList, DeviceListFooter, Layout, Spinner } from 'components';
import { useDevices } from 'hooks/useDevices';

export const DeviceListPage = () => {
    const devices = useDevices();

    if (devices.isLoading) {
        return <Spinner fullPage />;
    }
    return (
        <Layout bgColor="#FF7043">
            <DeviceList devices={devices.data} />
            <DeviceListFooter />
        </Layout>
    );
};
