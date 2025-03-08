import React, { useState } from 'react';
import { Users, Plus, X } from 'lucide-react';

type TeamMember = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type Team = {
  name: string;
  members: TeamMember[];
};

export default function Teams() {
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState<TeamMember[]>([
    { firstName: '', lastName: '', email: '', phone: '' },
    { firstName: '', lastName: '', email: '', phone: '' },
  ]);

  const addMember = () => {
    setMembers([...members, { firstName: '', lastName: '', email: '', phone: '' }]);
  };

  const removeMember = (index: number) => {
    if (members.length > 2) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement team creation logic
    console.log({ teamName, members });
    setIsCreatingTeam(false);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-goc-gray">Teams</h1>
          <button
            onClick={() => setIsCreatingTeam(true)}
            className="flex items-center px-4 py-2 bg-goc-red text-white rounded-lg hover:bg-goc-coral transition-colors"
          >
            <Plus size={20} className="mr-2" />
            Create Team
          </button>
        </div>

        {/* Team Creation Modal */}
        {isCreatingTeam && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-goc-gray">Create New Team</h2>
                  <button
                    onClick={() => setIsCreatingTeam(false)}
                    className="text-goc-gray hover:text-goc-red"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="teamName" className="block text-sm font-medium text-goc-gray mb-2">
                      Team Name
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-goc-gray">Team Members</h3>
                      <button
                        type="button"
                        onClick={addMember}
                        className="flex items-center text-goc-red hover:text-goc-coral"
                      >
                        <Plus size={20} className="mr-1" />
                        Add Member
                      </button>
                    </div>

                    {members.map((member, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium text-goc-gray">Member {index + 1}</h4>
                          {members.length > 2 && (
                            <button
                              type="button"
                              onClick={() => removeMember(index)}
                              className="text-goc-gray hover:text-goc-red"
                            >
                              <X size={20} />
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-goc-gray mb-1">
                              First Name
                            </label>
                            <input
                              type="text"
                              value={member.firstName}
                              onChange={(e) => updateMember(index, 'firstName', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-goc-gray mb-1">
                              Last Name
                            </label>
                            <input
                              type="text"
                              value={member.lastName}
                              onChange={(e) => updateMember(index, 'lastName', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-goc-gray mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              value={member.email}
                              onChange={(e) => updateMember(index, 'email', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-goc-gray mb-1">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={member.phone}
                              onChange={(e) => updateMember(index, 'phone', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsCreatingTeam(false)}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-goc-gray hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-goc-red text-white rounded-lg hover:bg-goc-coral"
                    >
                      Create Team
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Existing Teams List Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-goc-gray">Team Alpha</h3>
              <Users className="text-goc-red" size={24} />
            </div>
            <p className="text-goc-gray mb-4">4 Members</p>
            <button className="w-full px-4 py-2 bg-goc-red/10 text-goc-red rounded-lg hover:bg-goc-red/20 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}