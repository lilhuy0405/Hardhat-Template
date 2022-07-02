module.exports = async ({ethers, deployments, hardhatArguments}) => {
  console.log("deploy start");

  const {deploy, execute, getOrNull} = deployments;
  const [owner] = await ethers.getSigners();

  await deploy('Greeter', {
    from: owner.address,
    log: true,
    args: []
  });

};
