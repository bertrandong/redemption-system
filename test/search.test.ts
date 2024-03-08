import { search } from "../src/search"

describe('search function', () => {
  // The following tests are for staff-id-to-team-mapping.csv
  /*
  test('should return staff details if staff pass ID exists', async () => {
    const staffPassId = 'STAFF_H123804820G';
    const staff = await search(staffPassId);
    expect(staff).toBeDefined();
    expect(staff?.staff_pass_id).toBe(staffPassId);
    expect(staff?.team_name).toBe('BASS');
  });

  test('should return undefined if staff pass ID does not exist', async () => {
    const staffPassId = 'STAFF_999';
    const staff = await search(staffPassId);
    expect(staff).toBeUndefined();
  });
  */

  // The following tests are for staff-id-to-team-mapping-long.csv
  test('should return staff details if staff pass ID exists', async () => {
    const staffPassId = 'BOSS_CEQOWI8GNAB3';
    const staff = await search(staffPassId);
    expect(staff).toBeDefined();
    expect(staff?.staff_pass_id).toBe(staffPassId);
    expect(staff?.team_name).toBe('SLYTHERIN');
    expect(staff?.created_at).toBe(BigInt(1638117845204));
  });

  test('should return undefined if staff pass ID does not exist', async () => {
    const staffPassId = 'BOSS_01A';
    const staff = await search(staffPassId);
    expect(staff).toBeUndefined();
  });
});
