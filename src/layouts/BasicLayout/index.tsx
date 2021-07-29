import ProLayout, { PageContainer } from '@ant-design/pro-layout';
export default (props: any) => {
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout {...props}>
        <PageContainer>{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
};
