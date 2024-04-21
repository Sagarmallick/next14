const DashboardLayout = ({
  children,
  analytics,
  notification,
  revenue,
  login
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) => {
    const isLoggedIn=false;
  return isLoggedIn?(
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
  ):(login)
};

export default DashboardLayout;
