import React, {memo} from 'react';
import {useLocation} from 'react-router';
import {Breadcrumb, Layout} from 'antd';
import {routes} from './routes';

import styles from './index.less';

const {Content, Sider: LaySider, Header: LayHeader} = Layout;

const AppContent = () => {

    const {pathname} = useLocation();

    const activeMenuName = routes?.filter(route => route.path === pathname)?.[0]?.name;

    return (
        <>
            {
                <Layout>
                    <LayHeader
                        className={styles.header}
                    >
                        {/* <Header /> */}
                    </LayHeader>
                    <Layout>
                        <LaySider
                            className={styles.siderBar}
                            width="200px"
                        >
                            {/* <Sider /> */}
                        </LaySider>
                        <Layout className={styles.main}>
                            {
                                location.pathname !== '/error'
                                && (
                                    <div className={styles.breadcrumb}>
                                        <Breadcrumb>
                                            <Breadcrumb.Item>
                                                xxxx
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                {activeMenuName}
                                            </Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                )
                            }
                            <Content className={styles.content}>
                                <RoutesMap />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            }
        </>
    );
};

export default memo(AppContent);
