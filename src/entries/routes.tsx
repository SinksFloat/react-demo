import {
    UnorderedListOutlined
} from '@ant-design/icons';
import Home from '@/modules/Home';

export type ValueOf<T> = T[keyof T];


export const routekv = {
    home: '/home',
    default: '/',
};

export interface RouteItem {
    path: ValueOf<typeof routekv>;
    name: string;
    key: keyof typeof routekv;
    element: JSX.Element;
    icon?: JSX.Element;
}

export const routes: RouteItem[] = [
    {
        path: '/home',
        name: 'Home',
        key: 'home',
        element: <Home />,
        icon: <UnorderedListOutlined />,
    }
];
