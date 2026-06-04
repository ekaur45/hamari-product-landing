export default function HomeRoles() {
    return (
        <section className="mt-[60px]">
            <div className="inner reveal">
                <div className="tc">
                    <div className="chip"><span className="chip-dot"></span>Built For Everyone</div>
                    <h2 className="sec-title">One Platform, Four Portals</h2>
                    <p className="sec-sub">Every user gets a dedicated dashboard designed exactly for their needs.</p>
                </div>
                <div className="roles-grid">
                    <div className="gc role-gc">
                        <div className="role-icon text-[#60A5FA] bg-[rgba(37,99,235,0.15)]">S</div>
                        <h3>Students</h3>
                        <p>Access world-class teachers, get AI homework help, and attend live classes all in one place.</p>
                        <ul>
                            <li>Search & book verified teachers</li>
                            <li>60-minute live sessions</li>
                            <li>Daily AI homework credits</li>
                            <li>In-app messaging</li>
                            <li>Flexible rescheduling</li>
                        </ul>
                    </div>
                    <div className="gc role-gc">
                        <div className="role-icon bg-[rgba(13,148,136,0.15)] text-[var(--teal-l)]">T</div>
                        <h3>Teachers</h3>
                        <p>Build your teaching business, manage your schedule, and earn using our pro toolkit.</p>
                        <ul>
                            <li>Create verified profile</li>
                            <li>Set your own rates & availability</li>
                            <li>Interactive whiteboard</li>
                            <li>1:1 and group sessions</li>
                            <li>Dashboard payout requests</li>
                        </ul>
                    </div>
                    <div className="gc role-gc">
                        <div className="role-icon bg-[rgba(124,58,237,0.15)] text-[#A78BFA]">P</div>
                        <h3>Parents</h3>
                        <p>Stay involved in your child{"'"}s education with full visibility and booking control.</p>
                        <ul>
                            <li>Link & manage children</li>
                            <li>Book classes for child</li>
                            <li>Join sessions for support</li>
                            <li>Monitor progress</li>
                            <li>Manage payments</li>
                        </ul>
                    </div>
                    <div className="gc role-gc">
                        <div className="role-icon bg-[rgba(245,158,11,0.15)] text-[var(--amber)]">A</div>
                        <h3>Admin</h3>
                        <p>Full platform control — approve users, manage bookings, handle payouts and analytics.</p>
                        <ul>
                            <li>Approve teachers & profiles</li>
                            <li>Manage all bookings</li>
                            <li>Handle payouts & finance</li>
                            <li>Launch group programmes</li>
                            <li>Full analytics & reporting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}