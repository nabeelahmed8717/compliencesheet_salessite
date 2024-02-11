#!/usr/bin/env groovy

def deployImg(){

          withCredentials([
            usernamePassword(credentialsId: 'bitbucket_dev-team-workspace', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')
          ]) {
            sshagent(['235250937587-SaleSites']) {
              sh """
                ssh -o StrictHostKeyChecking=no -tt ubuntu@35.177.130.148 '
                  git config --global credential.helper "store --file=/home/ubuntu/.git-credentials"
                  echo -e "https://$USERNAME:$PASSWORD@bitbucket.org/dev-team-workspace/compliancesheet_salesite.git" > /home/ubuntu/.git-credentials
                  cd compliancesheet_salesite
                  git pull origin master
                  docker compose up -d --build
                  docker system prune -a -f
                '
              """
            }
          }

}
return this
