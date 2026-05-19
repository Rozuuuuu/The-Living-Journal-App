

export default function Login() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center w-full">
      <main className="w-full max-w-[400px] px-lg flex flex-col items-center justify-center">
        {/* Logo / Brand Idea Placeholder */}
        <div aria-hidden="true" className="mb-xxl flex justify-center items-center h-24 w-24 rounded-full bg-surface-container-highest shadow-sm">
          <span className="material-symbols-outlined text-display-lg font-display-lg text-primary opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>local_library</span>
        </div>
        
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary text-center mb-sm">
          Welcome
        </h1>
        
        <p className="font-body-md text-body-md text-on-surface-variant text-center mb-xl max-w-[280px]">
          Begin your deliberate practice with The Living Journal.
        </p>
        
        <div className="w-full flex flex-col gap-md">
          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary font-label-md text-label-md py-4 px-lg rounded-lg shadow-[0_4px_20px_rgba(45,45,45,0.04)] hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background">
            <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO5pr0u6xuMRAU0yqx_CMk-Nkioy3rEWg26VR7JtRNgBgJtUpQc63WiUrBKrnRjyQnAt0wXLSc_aHYjwWbAgx0RlfH6ZwXKrmoPTn6hkgM6dq5Bre5OlFKG_iyz5hSaciF-T2nUvhnv9HUsg3JueVojPJTgc7CeIwtOpcIXoubnv6oLkI58FsNYtyy8gdwT8wiadlGpHulUtgV3wwk4zA3UT_fRRJBjJ-WPez9Z8SMCGe1heAdG-Wgq4FE7fLxB3KUHEO5gD3mS13o"/>
            <span>Continue with Google</span>
          </button>
          
          {/* Divider */}
          <div className="flex items-center w-full my-sm">
            <div className="flex-grow border-t border-outline-variant opacity-50"></div>
            <span className="px-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">or</span>
            <div className="flex-grow border-t border-outline-variant opacity-50"></div>
          </div>
          
          {/* Connect Local Wallet Button (Secondary) */}
          <button className="w-full flex items-center justify-center gap-sm bg-transparent border border-secondary text-primary font-label-md text-label-md py-4 px-lg rounded-lg hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>account_balance_wallet</span>
            <span>Connect Local Wallet/Brain</span>
          </button>
        </div>
        
        <div className="mt-xxl text-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">
            By continuing, you agree to our <a className="underline hover:text-primary transition-colors" href="#">Terms of Service</a> and <a className="underline hover:text-primary transition-colors" href="#">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
