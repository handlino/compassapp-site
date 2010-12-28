set :application, "compass.app-site"
set :repository,  "git@git.handlino.com:compass-site.git"
set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`
set :branch, "master" # or production
set :deploy_via, :remote_cache

set :deploy_to, "/home/www/compass.app"
set :user, "railsapp"
set :port, "723"
set :copy_exclude, ".git"

set :use_sudo, false
role :web, "git.handlino.com"                          # Your HTTP server, Apache/etc
role :app, "git.handlino.com"                          # This may be the same as your `Web` server
#role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

# If you are using Passenger mod_rails uncomment this:
# if you're still using the script/reapear helper you will need
# these http://github.com/rails/irs_process_scripts

# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end

after 'deploy:symlink','deploy:cleanup'

after :deploy do
  run "ln -sf #{shared_path}/system/packages #{release_path}/compass.app"
end
