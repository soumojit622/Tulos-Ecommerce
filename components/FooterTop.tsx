import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react"; // import additional icons

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: Props[] = [
  {
    title: "Visit Us",
    subtitle: "Kolkata, India",
    icon: (
      <MapPin className="text-gray-600 group-hover:text-darkColor transition-colors text-xl" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+91 958 648 597",
    icon: (
      <Phone className="text-gray-600 group-hover:text-darkColor transition-colors text-xl" />
    ),
  },
  {
    title: "TULOS Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="text-gray-600 group-hover:text-darkColor transition-colors text-xl" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "support@tulos.com",
    icon: (
      <Mail className="text-gray-600 group-hover:text-darkColor transition-colors text-xl" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b py-8 px-4 md:px-8 lg:px-12">
      {data?.map((item, index) => (
        <ContactItem
          key={index}
          icon={item?.icon}
          title={item?.title}
          subtitle={item?.subtitle}
        />
      ))}
    </div>
  );
};

const ContactItem = ({ icon, title, subtitle }: Props) => {
  return (
    <div className="flex items-center gap-4 group hover:bg-gray-50 p-6 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform">
      {icon}
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-darkColor transition-colors text-lg sm:text-xl">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mt-2 group-hover:text-gray-900 transition-colors">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
