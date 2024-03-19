class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :snaak
      t.integer :roids

      t.timestamps
    end
  end
end
