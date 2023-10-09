class CreateGreet < ActiveRecord::Migration[7.0]
  def change
    create_table :greets do |t|
      t.integer :greet_id
      t.text :message

      t.timestamps
    end
  end
end
