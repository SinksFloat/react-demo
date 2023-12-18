import {memo} from 'react';
import {Row, Col} from 'antd';

const Header = () => {

    return (
        <Row
            justify="space-between"
            align="middle"
        >
            <Col span={12}>
                <img
                    src="https://img.yzcdn.cn/public_files/2017/11/30/fd89d4b"
                />
                <span>·平台系统</span>
            </Col>
            <Col
                span={12}
                style={{textAlign: 'right'}}
            />
        </Row>
    );
};

export default memo(Header);
