import '../../index.css';
import usePageTitle from '../../usePageTitle';
import CommitteeMembers from './committee.json';
import CommitteeRoles from './committee-roles.json';
import './MeetCommittee.css';

function MeetCommittee() {
  usePageTitle('Meet the Committee | Girton JCR');
  CommitteeMembers.sort((a, b) => {
    const aVal = CommitteeRoles.find(
      (element) => element.Role === a.Role
    )?.SortOrder;
    const bVal = CommitteeRoles.find(
      (element) => element.Role === b.Role
    )?.SortOrder;
    if (!aVal || !bVal) return -1;
    else if (aVal < bVal) return -1;
    else if (aVal === bVal) {
      if (a.Role < b.Role) return -1;
      else if (a.Role === b.Role) return 0;
    }
    return 1;
  });
  return (
    <div
      className="MeetCommittee"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Meet the Committee</h1>
      <h2 style={{ marginTop: '0' }}>The Committee at a Glance</h2>
      <p>
        {CommitteeMembers.map((member) => {
          const email = CommitteeRoles.find(
            (a) => a.Role === member.Role
          )?.Email;
          return (
            <>
              <b>{member.Role}: </b> {member.FirstName} {member.LastName} - <a href={'mailto:' + email}>{email}</a>
              <br />
            </>
          );
        })}
      </p>
      {/*<div className="MemberGallery">
        {CommitteeMembers.map((member) => {
          return (
            <>
              <div className="MemberBox">
                <h3>{member.Role}</h3>
                <p style={{ fontFamily: 'Poppins' }}>
                  {member.FirstName} {member.LastName}
                </p>
                <img
                  className="JCRMemberPhoto"
                  src={'/Committee/' + member.Image}
                />
          </div>
            </>
          );
        })}
      </div>*/}
    </div>
  );
}

export default MeetCommittee;
