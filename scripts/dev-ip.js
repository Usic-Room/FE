const { execSync } = require("child_process");
const os = require("os");

// 로컬 네트워크 IP 주소 가져오기
function getLocalExternalIp() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const addresses = interfaces[interfaceName];
    for (const address of addresses) {
      if (address.family === "IPv4" && !address.internal) {
        return address.address;
      }
    }
  }
  return "localhost";
}

const ip = getLocalExternalIp();
const port = 3000;

console.log(`Starting Next.js on http://${ip}:${port}`);

execSync(`next dev -H ${ip} -p ${port}`, { stdio: "inherit" });
