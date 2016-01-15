class CreateMovieModels < ActiveRecord::Migration
  def change
    create_table :movie_models do |t|

      t.timestamps null: false
    end
  end
end
