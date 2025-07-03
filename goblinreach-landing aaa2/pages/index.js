
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl md:text-6xl font-black mb-6 text-center tracking-tight">
        GoblinReach.Ai
      </h1>
      <p className="text-xl md:text-2xl text-green-300 mb-6 max-w-2xl text-center">
        Let AI DM for you.
      </p>
      <p className="text-md md:text-lg text-green-500 mb-10 text-center">
        Turn Instagram into your battlefield. 24/7 auto-DMs. Ghost accounts. Sales on autopilot.<br />
        VPNs and proxies available. Immediate access to paid slots.
      </p>
      <a
        href="/payment"
        className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-xl"
      >
        Deploy Now
      </a>
    </main>
  )
}
