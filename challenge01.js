const KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

export async function challenge01() {
  const response = await fetch('https://codember.dev/users.txt');
  const text = await response.text();
  const list = text.split('\n\n').map(line => line.replaceAll('\n', ' ').split(' '));
  const users = list.map(item => {
    const obj = {};
    item.forEach((value, index) => {
      const [key, val] = value.split(':');
      obj[key] = val;
    });
    return obj;
  });
  const validUsers = users.filter(user => KEYS.every(key => user.hasOwnProperty(key)));
  const count = validUsers.length;
  return `submit ${count}${validUsers[count - 1].usr}`;
}
