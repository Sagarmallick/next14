const DashboardLayout = ({
  children,
  analytics,
  notification,
  revenue,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{analytics}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notification}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
