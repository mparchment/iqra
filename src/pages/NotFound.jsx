const NotFound = () => {
    return (
      <div>
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <a href="/">Go Back to Home</a> {/* This can also be a Link component if you're using React Router */}
      </div>
    );
  };
  
  export default NotFound;