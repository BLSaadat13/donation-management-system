import React, { useState } from 'react';
import NGOSaveLife from '../assets/NGOSaveLife.png';
import NGOcheras from '../assets/NGOcheras.png';
import NGOBukit from '../assets/NGOBukit.png';
import ampangHome from '../assets/ampangHome.png';
import FEED from '../assets/FEED.png';
import Sweet from '../assets/Sweet.png';
import bg from '../assets/banner-2.jpg';

const NGOList = () => {
  const [expandedNGO, setExpandedNGO] = useState(null);

  const ngos = [
    {
      id: 1,
      name: 'Save Life Foundation',
      imageUrl: NGOSaveLife,
      description:
        'Save Life Foundation is a non-profit organization that has been tirelessly working since 2008 to alleviate hunger and improve the lives of homeless individuals and families. With a strong network of volunteers and partners, we provide nutritious meals, hygiene kits, and support services to help people in need regain stability and hope in their lives. Our dedicated team is passionate about making a difference and has served over a million meals to the homeless. We also run community awareness programs to educate the public about homelessness, its causes, and how we can collectively create a more compassionate society.',
    },
    {
      id: 2,
      name: 'NGO Cheras Foundation',
      imageUrl: NGOcheras,
      description:
        'NGO Cheras Foundation has been providing safe and secure temporary housing solutions for homeless people since 2010. Our mission is to offer a warm and compassionate environment that enables individuals to rebuild their lives with dignity. In addition to shelter, we provide comprehensive support services, including education, job training, and healthcare to empower our residents to achieve self-sufficiency. NGO Cheras operates multiple facilities in urban and rural areas, offering tailored programs to address the unique challenges faced by different homeless populations, such as veterans, single mothers, and youth. Our holistic approach has helped thousands of people transition from homelessness to stable housing and gainful employment.',
    },
    {
      id: 3,
      name: 'NGO Butit Jalil',
      imageUrl: NGOBukit,
      description:
        'NGO Bukit Jalil is a global organization committed to fighting homelessness by providing essential resources, food, and shelter to people in need. Established in 2012, we have been coordinating with local communities, governments, and other NGOs worldwide to create sustainable solutions for homelessness. Our initiatives include emergency relief programs, skill development workshops, and advocacy efforts to address the root causes of homelessness. We also focus on research and innovation to develop evidence-based strategies that can be replicated and scaled up in different countries. Our partnerships with key stakeholders have led to significant improvements in policy and infrastructure, empowering countless individuals to escape the cycle of homelessness and live fulfilling lives.',
    },
    {
        id: 4,
        name: 'NGO Home Again Ampang',
        imageUrl: ampangHome,
        description:
          'NGO Home Again Ampang is a community-driven organization founded in 2013, dedicated to supporting homeless individuals and families in the Ampang area. We provide emergency housing, daily meals, and essential supplies to those in need. Our primary focus is on reintegration and rehabilitation, offering personalized case management, mental health counseling, and skills training to help our clients successfully transition back into society. With strong community engagement, Home Again Ampang has been able to change the lives of countless homeless individuals, giving them renewed hope and a chance for a better future.',
    },
    {
        id: 5,
        name: 'FEED Malaysia',
        imageUrl: FEED,
        description:
          'FEED Malaysia is a nationwide initiative launched in 2015 to combat hunger and homelessness across the country. With a vast network of volunteers, donors, and partner organizations, we distribute food and essential items to homeless people and low-income families in need. Our flagship program, the FEED Kitchen, prepares and serves thousands of hot, nutritious meals every day at various locations. Additionally, we run educational workshops and empowerment programs that focus on financial literacy, entrepreneurship, and sustainable living to break the cycle of poverty and homelessness. Through our collective efforts, we aim to create a more equitable and compassionate Malaysia for all.',
    },
    {
        id: 6,
        name: 'Sweet Charity',
        imageUrl: Sweet,
        description:
          'Sweet Charity, established in 2011, is a unique organization that aims to bring joy and warmth to the lives of homeless individuals through creative arts and community involvement. We organize regular art therapy sessions, music workshops, and storytelling events to help the homeless express themselves and heal from their past experiences. In collaboration with local artists, we showcase the talents of our participants in public exhibitions and performances, raising awareness about the issues surrounding homelessness and challenging common stereotypes. Sweet Charity also offers practical assistance, such as shelter referrals, job placement, and healthcare services, to ensure that our clients have access to the resources they need to rebuild their lives.',
    },  
  ];

  const toggleNGODetails = (id) => {
    setExpandedNGO(expandedNGO === id ? null : id);
  };

  return (
    <div 
     className="min-h-screen bg-cover bg-center flex flex-col"
     style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="container mx-auto flex-grow">
            <h1 className="text-5xl text-pink-800 underline font-cursive mb-5 text-center">Our Affiliated NGOs</h1>
            <ul>
                {ngos.map((ngo) => (
                    <li key={ngo.id} className="mb-5">
                        <button
                            className="text-2xl font-semibold text-black bg-slate-300 opacity-70 focus:outline-none text-center block w-full"
                            onClick={() => toggleNGODetails(ngo.id)}
                        >
                            {ngo.name}
                        </button>
                        {expandedNGO === ngo.id && (
                            <div className="mt-2 text-center bg-blue-200 bg-opacity-50 p-4 rounded-lg">
                                <img
                                    src={ngo.imageUrl}
                                    alt={ngo.name}
                                    className="rounded-lg shadow-lg mx-auto block w-1/4 h-auto object-fit"
                                />
                                <p className="mt-2 text-lg text-black">{ngo.description}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default NGOList;