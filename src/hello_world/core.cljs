(ns hello-world.core
  (:require [helix.core :refer [defnc $]]
            [react-dom :as rdom]))

(defnc greeting [{:keys [name]}]
  (str "hi, " name))

(rdom/render ($ greeting {:name "rodney"})
             (js/document.getElementById "app"))
