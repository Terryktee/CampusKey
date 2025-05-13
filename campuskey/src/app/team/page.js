'use client'

const teamMembers = [
     {
    name: 'Kistie T SIbanda',
    role: 'Founder & COO',
    bio: 'Ensures seamless coordination between landlords, students, and the platform to enhance trust and efficiency.',
    image: '/kistie.png',
    email: 'natasha@campuskey.com',
  },
   {
    name: 'Tawanda Kapumha',
    role: 'Founder & CEO',
    bio: 'Informatics student at NUST, passionate about AI, digital innovation, and student solutions across Africa.',
    image: '/tawanda.png', // Update this path
    email: 'n02422803p@students.nust.ac.zw',
    linkedin: 'https://linkedin.com/in/terryktee', // optional
  },
 
  ,
  {
    name: 'Alicia M Knight',
    role: 'Founder & CMO',
    bio: 'Ensures seamless coordination between landlords, students, and the platform to enhance trust and efficiency.',
    image: '/alicia.png',
    email: 'natasha@campuskey.com',
  },
]

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-20">👥 Meet the Team</h2>
      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="text-center relative">
            <div className="w-full h-[360px] bg-gradient-to-tr from-teal-400 to-indigo-500 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="absolute inset-x-0 -top-16 flex justify-center">
                <img
                src={member.image}
                alt={member.name}
                className="w-[408px] h-[250px]  object-cover rounded-none"
              />
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wide">{member.role}</p>
             <p className="text-sm mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
