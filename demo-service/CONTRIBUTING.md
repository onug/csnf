# Contributing to csnf-demo

## Intro

The csnf-demo repo is managed in Github, and the repository is maintained by Peter Campbell (pcampbe@gmail.com). All contributions must be made via a git pull request.

We use a fairly typical feature branching approach to collaborative development. 

![Git Flow Diagram](img/git-flow.svg)

## Git Setup
### GitHub Access
n order to contribute, you’ll need a github.com ID - go to [https://github.com/](https://github.com/), click on “sign up”, and create an account. Once you’ve created your account, associate an SSH key with it. See the [github docs](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) for details on doing that.

Once you’ve got an account set up, and an ssh key added to it, send [@Peter Campbell](mailto:pcampbe@gmail.com) a note to add you to the repository. You’ll be added with write access to the repo.

### Cloning to Local
Once you’ve got an account and an ssh key, you can clone the repo via ssh (you just won’t be able to do anything other than read until your account is enabled for the repo). If you already have the repo cloned via https, it's recommended to delete it and reclone using ssh. To do this, just run:

git clone git@github.com:onug/CSNF.git
This will create a “CSNF” directory in your current working directory, and copy all of the contents of the repo to it.

### Creating a Feature Branch
Direct writing to the master branch should not be done (and in fact is disallowed by rule). Instead, you should create a branch, based off of the main branch. There are a few ways to create a branch, but the easiest way is to go to the github repo’s page at:

https://github.com/onug/CSNF

Once there, ensure that the master branch is selected (see the below image).
![Branch Selection](img/branch-select.png)

Click on the branch selector again, and start typing the name of the branch you want to create. If you’ve been enabled for write access, you should see something like this:
![Branch Creation](img/branch-create.png)
Go ahead and select “Create branch”. At this point, you’ve created the branch on the github server. Now, you need to pull it locally. In your local shell, in the CSNF directory, type:

git fetch && git checkout <new branch name>
replacing <new branch name> with the name of the branch you just created. The git fetch reaches out to the repo for updates (which will include the new branch you just created), and then the git checkout pulls down the metadata locally, and switches your local to the newly created branch. Once you’ve done this, any git commands you issue will be operating on that branch.

## Exploring the Repository’s Structure

The directory structure looks something like this:
* [CSNF](README.md)
* [csnf](README.md)
* [demo-service](README.md)