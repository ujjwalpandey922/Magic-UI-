"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Archive,
  Trash2,
  Clock,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Tag,
} from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";

export function EmailClient() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="container mx-auto ">
      <motion.div
        className="rounded-xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Email client header */}
        <div className="bg-black/70 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 flex items-center space-x-2">
              <span className="font-bold">Alicia Koch</span>
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="text-xl font-semibold">Inbox</div>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 bg-gray-800 rounded-md text-sm">
              All mail
            </button>
            <button className="px-3 py-1 bg-gray-800 rounded-md text-sm">
              Unread
            </button>
          </div>
        </div>

        {/* Email client body */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-black/60 border-r border-white/10 p-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              <motion.div
                variants={item}
                className="flex items-center justify-between p-2 bg-white/5 rounded-md"
              >
                <div className="flex items-center">
                  <Archive className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Inbox</span>
                </div>
                <span className="bg-white/10 px-2 py-0.5 rounded-md text-xs">
                  128
                </span>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md"
              >
                <div className="flex items-center">
                  <Archive className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Drafts</span>
                </div>
                <span className="bg-white/10 px-2 py-0.5 rounded-md text-xs">
                  9
                </span>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md"
              >
                <div className="flex items-center">
                  <Archive className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Sent</span>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md"
              >
                <div className="flex items-center">
                  <Archive className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Junk</span>
                </div>
                <span className="bg-white/10 px-2 py-0.5 rounded-md text-xs">
                  23
                </span>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md"
              >
                <div className="flex items-center">
                  <Trash2 className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Trash</span>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md"
              >
                <div className="flex items-center">
                  <Archive className="w-5 h-5 mr-3 text-gray-400" />
                  <span>Archive</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Email list */}
          <div className="flex-1 bg-black/40">
            {/* Search bar */}
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>

            {/* Email items */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="divide-y divide-white/10"
            >
              <motion.div
                variants={item}
                className="p-4 hover:bg-white/5 cursor-pointer"
              >
                <div className="flex justify-between mb-1">
                  <div className="font-medium">William Smith</div>
                  <div className="text-sm text-gray-400">4 months ago</div>
                </div>
                <div className="font-medium text-sm mb-1">Meeting Tomorrow</div>
                <div className="text-sm text-gray-400 line-clamp-1">
                  Hi, let's have a meeting tomorrow to discuss the project. I've
                  been reviewing the project details and have some ideas I'd
                  like to share. It's crucial that we align on our next step...
                </div>
                <div className="flex space-x-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    meeting
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    work
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    important
                  </Badge>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="p-4 hover:bg-white/5 cursor-pointer"
              >
                <div className="flex justify-between mb-1">
                  <div className="font-medium">Alice Smith</div>
                  <div className="text-sm text-gray-400">4 months ago</div>
                </div>
                <div className="font-medium text-sm mb-1">
                  Re: Project Update
                </div>
                <div className="text-sm text-gray-400 line-clamp-1">
                  Thank you for the project update. It looks great! I've gone
                  through the report, and the progress is impressive. The team
                  has done a fantastic job, and I appreciate the hard...
                </div>
                <div className="flex space-x-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    work
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    important
                  </Badge>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="p-4 hover:bg-white/5 cursor-pointer"
              >
                <div className="flex justify-between mb-1">
                  <div className="font-medium">Bob Johnson</div>
                  <div className="text-sm text-gray-400">10 months ago</div>
                </div>
                <div className="font-medium text-sm mb-1">Weekend Plans</div>
                <div className="text-sm text-gray-400 line-clamp-1">
                  Hey, are you free this weekend? I was thinking of going to the
                  beach. The weather forecast is looking great, and it would be
                  nice to take a break from work. Let me know if you're...
                </div>
                <div className="flex space-x-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    personal
                  </Badge>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Email content */}
          <div className="w-1/2 bg-black/30 border-l border-white/10 p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-1">William Smith</h2>
              <div className="text-sm text-gray-400 mb-2">Meeting Tomorrow</div>
              <div className="text-sm text-gray-400 mb-4">
                Reply-To: williamsmith@example.com
              </div>

              <div className="space-y-4 text-sm">
                <p>
                  Hi, let's have a meeting tomorrow to discuss the project. I've
                  been reviewing the project details and have some ideas I'd
                  like to share. It's crucial that we align on our next steps to
                  ensure the project's success.
                </p>
                <p>
                  Please come prepared with any questions or insights you may
                  have. Looking forward to our meeting!
                </p>
                <p>Best regards, William</p>
              </div>
            </div>
          </div>
        </div>
        <BorderBeam duration={10} size={150} />
      </motion.div>
    </section>
  );
}
