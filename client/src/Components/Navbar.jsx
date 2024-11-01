import { useState } from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MOBILE_NAV_ITEMS = [
    { id: 0, navTitle: "Home", path: "/" },
    { id: 1, navTitle: "login", path: "/login" },
    { id: 2, navTitle: "signup", path: "/signup" },
    { id: 3, navTitle: "about", path: "/about" },
];

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const hideNavItemsVariant = {
        opened: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
        closed: { opacity: 1, y: "0%", transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } },
    };

    const mobileMenuVariant = {
        opened: { y: "0%", transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] } },
        closed: { y: "-100%", transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] } },
    };

    const fadeInVariant = {
        opened: { opacity: 1, transition: { delay: 1.2 } },
        closed: { opacity: 0 },
    };

    const ulVariant = {
        opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
        closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
    };

    const liVariant = {
        opened: { opacity: 1, y: "0%", transition: { duration: 0.65, ease: "easeOut" } },
        closed: { opacity: 0, y: "100%", transition: { duration: 0.25, ease: "easeInOut" } },
    };
    return (
        <div className="overflow-hidden bg-neutral-900 text-white">
            <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"} className="flex justify-between items-center px-9 py-3">
                <div className="overflow-hidden">
                    <motion.h variants={hideNavItemsVariant} className="capitalize text-xl font-bold">
                        <Link to={"/"}>Thoughts</Link>
                    </motion.h>
                </div>
                <div className="overflow-hidden">
                    <motion.div variants={hideNavItemsVariant} onClick={() => setMobileNavOpen(true)} className="uppercase text-xs cursor-pointer">
                        <IoMenu className="text-4xl bg-gray-500 p-0 m-0 rounded-full" />
                    </motion.div>
                </div>
                <motion.div variants={mobileMenuVariant} className="fixed top-0 left-0 h-screen w-full flex flex-col items-center bg-black">
                    <motion.button variants={fadeInVariant} onClick={() => setMobileNavOpen(false)} className="self-end px-9 py-3 text-white uppercase text-xs">
                        <IoClose className=" text-4xl bg-gray-500 p-0 m-0 rounded-full" />
                    </motion.button>
                    <motion.ul variants={ulVariant} className="mt-10 list-none">
                        {MOBILE_NAV_ITEMS.map((navItem) => (
                            <motion.li whileTap={{ scale: 0.95 }} key={navItem.id} variants={liVariant} className="my-5">
                                <motion.div onClick={() => setMobileNavOpen(false)} className="text-4xl capitalize text-center cursor-pointer hover:italic"><Link to={navItem.path}>{navItem.navTitle}</Link></motion.div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div variants={fadeInVariant} className="mt-20 flex space-x-10">
                        <h5 className="font-normal">sharethoughts@gmail.com</h5>
                    </motion.div>
                </motion.div>
            </motion.nav>
        </div>
    )
}
